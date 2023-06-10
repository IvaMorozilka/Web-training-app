import {
  Box,
  Divider,
  Stack,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import TradeSection from "./TradeSection";
import {CustomToggleButton} from "../../ui/StyledComponents";

export const Trade = () => {
  const [option, setOption] = useState('market');
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
              pl: theme.spacing(1),
              gap: theme.spacing(2),
            }}
        >
          <CustomToggleButton value="market">Маркет</CustomToggleButton>
          <CustomToggleButton value="limit">Лимит</CustomToggleButton>
        </ToggleButtonGroup>
        <Divider />
      </Box>
      <Stack direction="row" alignItems='center' spacing={-0.5} height='100%'>
        <TradeSection isBuy isMarket={option === 'market'}/>
        <TradeSection isMarket={option === 'market'}/>
      </Stack>
    </Box>
  );
};
