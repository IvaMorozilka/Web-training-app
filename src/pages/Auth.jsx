import {
  Box,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
import MyButton from "../ui/MyButton";
import AuthTextField from "../ui/AuthTextField";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";
import { EDUCATION_ROUTE } from "../utils/consts";
import AlertDialog from "../components/AlertDialog";
import {observer} from "mobx-react-lite";

const Auth = () => {
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  function handleLoginButton(e) {
    setIsLoading(true);
    setTimeout(async () => {
      user.setIsAuth(true);
      navigate(EDUCATION_ROUTE, {replace: true});
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Container sx={{ display: "flex", justifyContent: "center", my: "75px" }}>
      <Box
        width="420px"
        height="430px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        px="10px"
        className="box"
      >
        <Typography
          mt="10px"
          fontSize="60px"
          fontWeight="700"
          className="gradient-text"
        >
          Войти
        </Typography>
        <Box component="form" px="10px">
          <AuthTextField
            autoComplete="off"
            fullWidth
            margin="normal"
            id="login"
            label="Логин"
            variant="outlined"
            placeholder="Введите логин"
            borderRadius="8px"
            onChange={(e) => setLogin(e.target.value)}
          />
          <AuthTextField
            autoComplete="off"
            fullWidth
            margin="normal"
            id="password"
            label="Пароль"
            variant="outlined"
            placeholder="Введите пароль"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Grid container alignItems="center">
            <Grid item xs>
              <FormControlLabel
                control={
                  <Checkbox
                    value="remebmer"
                    sx={{
                      ".MuiSvgIcon-root": {
                        fill: "#8859EC",
                        height: "30px",
                        width: "30px",
                      },
                    }}
                  />
                }
                label="Запомнить меня"
                sx={{
                  "& .MuiFormControlLabel-label": {
                    color: "#fff",
                  },
                }}
              />
            </Grid>
            <Grid item>
              <Link sx={{ color: "#fff" }} underline="hover">
                Забыли пароль?
              </Link>
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="column" gap="10px">
            <MyButton
              sx={{
                "&:disabled": { backgroundColor: "#7e57c2", color: "#5e5e5e" },
              }}
              size="large"
              type="button"
              disabled={isLoading}
              fullWidth
              variant="contained"
              onClick={handleLoginButton}
            >
              {isLoading ? "ㅤ" : "Войти"}
              {isLoading && (
                <CircularProgress
                  size={32}
                  sx={{
                    color: "#fff",
                    position: "absolute",
                  }}
                />
              )}
            </MyButton>
            <MyButton fullWidth size="large" type="button" variant="outlined">
              Зарегистрироваться
            </MyButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Auth;
