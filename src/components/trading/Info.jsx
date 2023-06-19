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
            p={1}
            position={'relative'}
        >
            <Box pt={1}>
                <ToggleButtonGroup
                    value={option}
                    exclusive
                    onChange={handleOption}
                    sx={{
                        pl: theme.spacing(2),
                        gap: theme.spacing(2),
                    }}
                >
                    <CustomToggleButton value="history">История ордеров</CustomToggleButton>
                    <CustomToggleButton value="assets">Активы</CustomToggleButton>
                </ToggleButtonGroup>
                <Divider sx = {{position: 'absolute', left:0, right:0, top: 40, zIndex: 3}}/>
            </Box>
            <Box px = {2} mt={'1px'} sx = {{overflowY: 'auto', height: '200px'}}>
                {option === 'history' ? <HistoryTable/> : <AssetsTable/>}
            </Box>
        </Box>
    );
}