import {
  Box,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import TradeSection from "./TradeSection";

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.MuiToggleButton-standard": {
    color: "#929292",
    padding: 0,
    border: "none",
    textTransform: "none",

    "&:after": {
      content: '""',
      position: "absolute",
      width: "100%",
      border: "1px solid black",
      bottom: -1,
      left: 0,
      opacity: 0,
      transition: "opacity .1s ease-in-out",
    },

    "&.Mui-selected": {
      "&:after": {
        content: '""',
        position: "absolute",
        width: "100%",
        border: "1px solid black",
        bottom: -1,
        left: 0,
        opacity: 1,
      },

      background: "none",
      color: "#000",
    },
  },
}));

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
