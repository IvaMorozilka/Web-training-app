import React, {useContext, useEffect, useState} from "react";
import {Box, InputAdornment, Slider, Stack, TextField, Typography} from "@mui/material";
import {grey, purple} from "@mui/material/colors";
import styled from "@emotion/styled";
import {Context} from "../../index";
import {checkDecimalInput, getTotal} from "../../utils/helpers";
import {CustomButton} from "../../ui/CustomButton";
import {observer} from "mobx-react-lite";

const CustomSlider = styled(Slider)(({theme}) => ({
    "&.MuiSlider-colorPrimary": {
        marginTop: '-8px',
        marginBottom: '5px',
        color: grey[500],
        "& .MuiSlider-track": {
            color: purple[500],
        },
        "& .MuiSlider-thumb": {
            "&.Mui-active": {
                "&:hover": {boxShadow: "0px 0px 0px 7px rgba(126, 87, 194, 0.2)"},
                boxShadow: "0px 0px 0px 7px rgba(126, 87, 194, 0.2)",
            },
            "&:hover": {
                boxShadow: "0px 0px 0px 4px rgba(126, 87, 194, 0.2)",
            },
            "&.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 7px rgba(126, 87, 194, 0.2)",
            },
            color: "#fff",
            outline: `1px solid ${grey[500]}`,
        },
        "& .MuiSlider-valueLabelOpen": {
            "&:after": {
                content: '"%"',
                position: "relative",
            },
        },
        "& .MuiSlider-mark": {
            "&.MuiSlider-markActive": {
                outline: `1px solid ${purple[500]}`,
            },
            backgroundColor: "#fff",
            opacity: 1,
            width: 4,
            height: 4,
            borderRadius: "100%",
            outline: `1px solid ${grey[500]}`,
        },
        "& .MuiSlider-markLabel": {
            '&[data-index="4"]': {
                transform: "translate(-75%,-50%)",
            },
            transform: "translate(-50%,-50%)",
            color: `${grey[500]}`,
            fontSize: "12px",
        },
    },
}));
const CustomTextField = styled(TextField)(({theme}) => ({
    "& .Mui-disabled": {
        "& .MuiOutlinedInput-input": {
            "&::placeholder": {
                opacity: 0.75,
            },
        },
    },
    "& .MuiOutlinedInput-input": {
        textAlign: "end",
    },
    "& .MuiOutlinedInput-root": {
        height: 40,
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderRadius: "8px",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
    "& input[type=number]": {
        MozAppearance: "textfield",
    },
}));

const TradeSection = observer( ({isBuy, isMarket, ...props}) => {
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
        : trading.selectedAccount.amount;
    const exchangeRate = trading.selectedAccount.price;
    const [sum, setSum] = useState(0);
    const [price, setPrice] = useState(exchangeRate);
    const [total, setTotal] = useState(0);

    useEffect(()=> {
      setPrice(exchangeRate);
    }, [trading.selectedAccount])


    const handlePriceChange = (e) => {
        if (checkDecimalInput(e.target.value, 1)) {
            setPrice(e.target.value);
            setTotal(getTotal(e.target.value, sum));
        }
    };
    const handleSumChange = (e) => {
        if (checkDecimalInput(e.target.value, isBuy ? 1 : 8)) {
            setSum(e.target.value);
            setTotal(getTotal(e.target.value,price));
        }
    };
    const handleTotalChange = (e) => {
        if (checkDecimalInput(e.target.value, 1)) {
            setSum((e.target.value / price).toFixed(8));
            setTotal(e.target.value);
        }
    };
    const handleSliderChange = (e) => {
        const percent = e.target.value / 100;
        if (isBuy) {
            setSum((currencyAmount / price * percent).toFixed(8));
            setTotal(currencyAmount * percent);
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
        <Box p={1}>
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
                                    {isBuy ? 'USD' : trading.selectedAccountCurrency}
                                </InputAdornment>
                            ) : (
                                <InputAdornment position="end">
                                    {trading.selectedAccountCurrency}
                                </InputAdornment>
                            ),
                        }}
                        type="text"
                    ></CustomTextField>
                    <Box px = {0.5}>
                        <CustomSlider
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
                        <Typography>{currencyAmount}</Typography>
                        <Typography>{isBuy ? 'USD' : trading.selectedAccountCurrency}</Typography>
                    </Box>

                </Stack>

                <CustomButton onClick = { isBuy ? handleBuy : handleSell}  variant='contained' color={isBuy ? 'success' : 'secondary'} fullWidth
                              sx={{mt: '8px', fontWeight: 600, borderRadius: '9px'}}>
                    {isBuy ? 'Купить' : 'Продать'}
                </CustomButton>
            </Stack>
        </Box>
    );
});

export default TradeSection;
