import React, {useContext, useEffect, useRef, useState} from "react";
import {Box, InputAdornment, Stack, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";
import {Context} from "../../index";
import {checkDecimalInput, formatSum, getTotal} from "../../utils/helpers";
import {CustomButton} from "../../ui/CustomButton";
import {observer} from "mobx-react-lite";
import {CustomSlider, CustomTextField} from "../../ui/StyledComponents";


const TradeSection = observer(({isBuy, isMarket, hide, ...props}) => {
    const marks = [
        {
            value: 0,
            label: "0",
        },
        {
            value: 25,
        },
        {
            value: 50,
        },
        {
            value: 75,
        },
        {
            value: 100,
            label: "100%",
        },
    ];
    const {trading} = useContext(Context);
    const currencyAmount = isBuy
        ? trading.usdAmount
        : trading.selectedAccountAmount;

    const [sum, setSum] = useState(0);
    const [price, setPrice] = useState(0);
    const [total, setTotal] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);

    useEffect(() => {
        setTotal(0);
        setSum(0);
        setSliderValue(0)
        setPrice(trading.getSelectedAccountCurrentPrice());
    }, [trading.selectedAccount, trading.marketData])

    const handlePriceChange = (e) => {
        if (checkDecimalInput(e.target.value, 1)) {
            setPrice(e.target.value);
            setTotal(getTotal(e.target.value, sum));
        }
    };
    const handleSumChange = (e) => {
        if (checkDecimalInput(e.target.value, isBuy ? 1 : 8)) {
            setSum(e.target.value);
            setTotal(getTotal(e.target.value, price));
        }
    };
    const handleTotalChange = (e) => {
        if (checkDecimalInput(e.target.value, 2)) {
            setSum((e.target.value / price).toFixed(8));
            setTotal(e.target.value);
        }
    };
    const handleSliderChange = (e) => {
        setSliderValue(e.target.value)
        const percent = e.target.value / 100;
        if (isBuy) {
            setSum(formatSum((currencyAmount / price * percent), price));
            setTotal((currencyAmount * percent).toFixed(2));
        } else {
            setSum((currencyAmount * percent).toFixed(8));
            setTotal((price * currencyAmount * percent).toFixed(1));
        }
    };
    const handleKeyDown = (e) => {
        if (e.code === "Backspace" && e.target.value.length === 1) {
            e.preventDefault();
            let newValue = e.target.value.slice(0, -1);
            // eslint-disable-next-line default-case
            switch (e.target.id) {
                case "price":
                    setPrice(newValue);
                    console.log('changePriceBackspace', price);
                    break;
                case "total":
                    setTotal(newValue);
                    break;
                case "sum":
                    setSum(newValue);
                    break;
            }
        }
    };
    const handleBuy = () => {
        trading.confirmBuy(price, sum, total);
    }
    const handleSell = () => {
        trading.confirmSell(price, sum, total);
    }

    return (
        <Box p={1} display={hide ? 'none' : 'block'} sx = {{overflowX: 'hidden'}}>
            <Stack direction="column"
                   spacing={1}>
                <Stack spacing={1}>
                    <CustomTextField
                        id="price"
                        disabled={isMarket}
                        onChange={handlePriceChange}
                        onKeyDown={handleKeyDown}
                        inputProps={{
                            inputMode: "decimal",
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">Цена</InputAdornment>
                            ),
                        }}
                        type="text"
                        value={isMarket ? "" : price}
                        placeholder={isMarket ? "Рыночная цена" : ""}
                    ></CustomTextField>
                    <CustomTextField
                        id={isMarket ? "total" : "sum"}
                        onChange={isMarket ? handleTotalChange : handleSumChange}
                        onKeyDown={handleKeyDown}
                        value={isMarket ? total : sum}
                        inputProps={{
                            inputMode: "decimal",
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    {isMarket ? "Всего" : "Сумма"}
                                </InputAdornment>
                            ),
                            endAdornment: isMarket ? (
                                <InputAdornment position="end">
                                    USD
                                </InputAdornment>
                            ) : (
                                <InputAdornment position="end">
                                    {trading.selectedAccountCurrency}
                                </InputAdornment>
                            ),
                        }}
                        type="text"
                    ></CustomTextField>
                    <Box px={0.5}>
                        <CustomSlider
                            value = {sliderValue}
                            size="small"
                            valueLabelDisplay="auto"
                            marks={marks}
                            onChange={handleSliderChange}
                        />
                    </Box>
                </Stack>
                <CustomTextField
                    id="total"
                    onChange={handleTotalChange}
                    onKeyDown={handleKeyDown}
                    value={total}
                    fullWidth
                    sx={{display: !isMarket ? "block" : "none"}}
                    inputProps={{
                        inputMode: "decimal",
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">Всего</InputAdornment>
                        ),
                        endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                    }}
                    type="text"
                ></CustomTextField>

                <Stack direction='row' spacing={1}>
                    <Typography color={grey[500]}>Доступно</Typography>
                    <Box display='flex' gap='3px'>
                        <Typography>{isBuy ? currencyAmount :  formatSum(parseFloat(currencyAmount), price)}</Typography>
                        <Typography>{isBuy ? 'USD' : trading.selectedAccountCurrency}</Typography>
                    </Box>
                </Stack>

                <CustomButton onClick={isBuy ? handleBuy : handleSell} variant='contained'
                              color={isBuy ? 'success' : 'secondary'} fullWidth
                              sx={{mt: '8px', fontWeight: 600, borderRadius: '9px'}}>
                    {isBuy ? 'Купить' : 'Продать'}
                </CustomButton>
            </Stack>
        </Box>
    );
});

export default TradeSection;
