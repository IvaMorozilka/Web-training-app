import {useState} from "react";
import {Box, Divider, ToggleButtonGroup, useTheme} from "@mui/material";
import {CustomToggleButton} from "../../ui/StyledComponents";
import {HistoryTable} from "./HistoryTable";
import AssetsTable from "./AssetsTable";

export const Info = () => {
    const [option, setOption] = useState('history');
    const theme = useTheme();
    const handleOption = (event, newOption) => {
        if (!newOption) return;
        setOption(newOption);
    };
    return (
        <Box
            width="100%"
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
        >
            <Box pt={1}>
                <ToggleButtonGroup
                    value={option}
                    exclusive
                    onChange={handleOption}
                    sx={{
                        pl: theme.spacing(4),
                        gap: theme.spacing(2),
                    }}
                >
                    <CustomToggleButton value="history">История ордеров</CustomToggleButton>
                    <CustomToggleButton value="assets">Активы</CustomToggleButton>
                </ToggleButtonGroup>
                <Divider />
            </Box>
            <Box px = {4} sx = {{overflowY: 'scroll', scrollbarWidth: 'thin'}}>
                {option === 'history' ? <HistoryTable/> : <AssetsTable/>}
            </Box>
        </Box>
    );
}