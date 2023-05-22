import {
  Container,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import MyTextField from "../ui/MyTextField";
import MyButton from "../ui/MyButton";

const Registration = () => {
  const [regData, setRegData] = useState(null);

  function handleInputsChange(key, value) {
    setRegData({ ...regData, [key]: value });
    console.log(regData);
  }

  function handleClick() {
    try {
      console.log(Object.keys(regData).length);
    } catch (e) {
      console.log(e.value);
    }
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        className="form-container box"
        width="600px"
        height="500px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        alignItems="center"
        px="10px"
      >
        <Typography
          mt="10px"
          fontSize="40px"
          fontWeight="700"
          className="gradient-text"
        >
          Регистрация
        </Typography>
        <Box component="form" px="10px">
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={6}>
              <MyTextField
                fullWidth
                margin="dense"
                type="email"
                id="email"
                label="Электронная почта"
                variant="outlined"
                placeholder="Введите почту"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <MyTextField
                fullWidth
                margin="dense"
                type="text"
                id="login"
                label="Придумайте логин"
                variant="outlined"
                placeholder="Введите логин"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <MyTextField
                fullWidth
                margin="dense"
                type="password"
                id="password"
                label="Придумайте пароль"
                variant="outlined"
                placeholder="Введите пароль"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <MyTextField
                fullWidth
                margin="dense"
                type="password"
                id="repeat-password"
                label="Повторите пароль"
                variant="outlined"
                placeholder="Введите пароль"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <MyTextField
                fullWidth
                margin="dense"
                type="text"
                id="name"
                label="Имя"
                variant="outlined"
                placeholder="Введите имя"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <MyTextField
                fullWidth
                margin="dense"
                type="text"
                id="surname"
                label="Фамилия"
                variant="outlined"
                placeholder="Введите фамилию"
              />
            </Grid>
            <Grid item xs={6} sm={4}>
              <MyTextField
                fullWidth
                margin="dense"
                type="text"
                id="patronymic"
                label="Отчество"
                variant="outlined"
                placeholder="Введите отчество"
              />
            </Grid>
            <Grid item xs={6} sm={6} alignItems="center">
              <MyTextField
                fullWidth
                margin="dense"
                type="text"
                id="phone"
                label="Номер телефона"
                variant="outlined"
                placeholder="Введите номер"
              />
            </Grid>
          </Grid>
        </Box>
        <MyButton
          size="large"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: "15px", width: "286px", borderRadius: '8px', py: '15px' }}
        >
          Зарегистрироваться
        </MyButton>
      </Box>
    </Container>
  );
};

export default Registration;
