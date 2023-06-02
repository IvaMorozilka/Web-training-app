import {Box, InputAdornment, Slider, Stack, TextField, Typography} from "@mui/material";
import {grey, purple} from "@mui/material/colors";
import styled from "@emotion/styled";
import {CustomButton} from "../../ui/CustomButton";

const CustomSlider = styled(Slider)(({theme}) => ({
    "&.MuiSlider-colorPrimary": {
        color: grey[500],
        "& .MuiSlider-track": {
            color: purple[500],
        },
        "& .MuiSlider-thumb": {
            "&.Mui-active": {
                boxShadow: '0px 0px 0px 7px rgba(126, 87, 194, 0.2)',
            },
            "&:hover": {
                boxShadow: '0px 0px 0px 4px rgba(126, 87, 194, 0.2)',
            },
            "&.Mui-focusVisible": {
                boxShadow: '0px 0px 0px 7px rgba(126, 87, 194, 0.2)',
            },
            color: "#fff",
            outline: `1px solid ${grey[500]}`
        },
        "& .MuiSlider-valueLabelOpen": {
            "&:after": {
                content: '"%"',
                position: 'relative',
                top: 1,
                left: 1,
            }
        },
        "& .MuiSlider-mark" : {
            backgroundColor: '#fff',
            opacity: 1,
            width: 4,
            height: 4,
            borderRadius: '100%',
            outline: `1px solid ${purple[500]}`
        },
        "& .MuiSlider-markLabel": {
            '&[data-index="1"]' : {
                transform: 'translate(-75%,-50%)',
            },
            transform: 'translate(-50%,-50%)',
            color: `${grey[500]}`,
            fontSize: '12px',
        },
    }

}));

export const TradeGroup = ({btnColor}) => {
    const marks = [
        {
            value: 0,
            label: '0'
        },
        {
            value: 100,
            label: '100%'
        },
    ]
    return (
        <Box sx={{outline: "1px solid red"}} width={500} p = {1}>
            <Stack spacing={2}>
                <TextField
                    sx={{direction: 'rtl', "& .MuiOutlinedInput-notchedOutline": {borderRadius: '8px'}}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Цена</InputAdornment>,
                    }}
                    type='number'
                >
                </TextField>
                <TextField
                    sx={{direction: 'rtl', "& .MuiOutlinedInput-notchedOutline": {borderRadius: '8px'}}}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">Сумма</InputAdornment>,
                    }}
                    type='number'
                >
                </TextField>
            </Stack>
            <CustomSlider size='small' valueLabelDisplay="auto" marks={marks}/>

            <Stack direction='row' spacing={1}>
                <Typography color={grey[500]}>Доступно</Typography>
                <Box display='flex' gap='3px'>
                    <Typography>1000</Typography>
                    <Typography>USD</Typography>
                </Box>
            </Stack>

            <CustomButton round variant='contained' color={btnColor} fullWidth sx = {{mt: '8px', fontWeight: 600}}>
                Купить
            </CustomButton>
        </Box>
    )
}