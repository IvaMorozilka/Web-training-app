import {
  Box,
  Container,
  Grid,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import React from "react";

const Auth = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        width="420px"
        height="430px"
        className="login-container"
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        px="10px"
      >
        <Typography
          mt="20px"
          fontSize="60px"
          fontWeight="700"
          className="login-text"
        >
          Войти
        </Typography>
        <Box component="form" px="10px">
          <TextField
            fullWidth
            margin="normal"
            id="login"
            label="Логин"
            variant="outlined"
            placeholder="Введите логин"
            borderRadius="8px"
          />
          <TextField
            fullWidth
            margin="normal"
            id="password"
            label="Пароль"
            variant="outlined"
            placeholder="Введите пароль"
            type="password"
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
              <Link
                sx={{ color: "#fff" }}
                underline="hover"
              >
                Забыли пароль?
              </Link>
            </Grid>
          </Grid>
          <Box display="flex" flexDirection="column" gap="10px">
            <Button size="large" type="submit" fullWidth variant="contained">
              Войти
            </Button>
            <Button
              size="large"
              type="submit"
              fullWidth
              variant="outlined"
              sx={{
                color: "#fff",
                border: "2px solid rgba(126, 87, 194, 0.5)",
                "&:hover": { border: "2px solid #7E57C2" },
              }}
            >
              Зарегистрироваться
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>

    /* // <Container className="d-flex justify-content-center mt-5">
        //     <Form className="login-container d-flex flex-column justify-content-around">
        //         <div className="login-text text-center">Войти</div>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Control className="input" type="login" placeholder="Логин" />
        //         </Form.Group>
        //         <Form.Group className="mb-0" controlId="formBasicPassword">
        //             <Form.Control className="input" type="password" placeholder="Пароль" />
        //         </Form.Group>
        //
        //         <Form.Group className="mb-4 d-flex flex-row justify-content-between align-items-baseline"
        //                     controlId="formBasicCheckbox">
        //             <Form.Check type="checkbox" label="Запомнить меня" />
        //             <a href={REGISTRATION_ROUTE}>Забыли пароль?</a>
        //         </Form.Group>
        //
        //         <Form.Group className="d-flex flex-column justify-content-between gap-1 mb-2" controlId="formButtons">
        //             <Button className="auth-btn text-white">Войти</Button>
        //             <Button className="auth-btn text-white">Создать аккаунт</Button>
        //         </Form.Group>
        //     </Form>
        // </Container> */
  );
};

export default Auth;
