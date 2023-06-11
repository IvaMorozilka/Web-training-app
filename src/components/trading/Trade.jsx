import {
  Box, Button,
  Divider,
  Stack,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import TradeSection from "./TradeSection";
import {CustomToggleButton} from "../../ui/StyledComponents";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export const Trade = () => {
  const [option, setOption] = useState('market');
  const [orderType, setOrderType] = useState('buy');
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
      <Button startIcon={<ChangeCircleIcon/>} onClick = {() => setOrderType(orderType === 'buy' ? 'sell' : 'buy')}>Сменить тип</Button>
      <Stack direction={'column'}>
        <TradeSection hide = {orderType === 'sell'} isBuy isMarket={option === 'market'}/>
        <TradeSection hide = {orderType === 'buy'} isMarket={option === 'market'}/>
      </Stack>
    </Box>
  );
};
