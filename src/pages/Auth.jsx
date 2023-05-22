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
import React, {useState} from "react";
import MyButton from "../ui/MyButton";
import MyTextField from "../ui/MyTextField";


const Auth = () => {
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    function handleLoginButton(e) {
        setIsLoading(true);
        setTimeout(async () => {
            setIsLoading(false);
        }, 2000);
    }

    return (
        <Container sx={{display: "flex", justifyContent: "center"}}>
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
                    {/*<TextField*/}
                    {/*    fullWidth*/}
                    {/*    margin="normal"*/}
                    {/*    helperText="Неправильный логин"*/}
                    {/*    id="login"*/}
                    {/*    label="Логин"*/}
                    {/*    variant="outlined"*/}
                    {/*    placeholder="Введите логин"*/}
                    {/*    borderRadius="8px"*/}
                    {/*    onChange={(e) => setLogin(e.target.value)}*/}
                    {/*/>*/}
                    <MyTextField
                        autoComplete='off'
                        fullWidth
                        margin="normal"
                        id="login"
                        label="Логин"
                        variant="outlined"
                        placeholder="Введите логин"
                        borderRadius="8px"
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <MyTextField
                        autoComplete='off'
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
                            <Link sx={{color: "#fff"}} underline="hover">
                                Забыли пароль?
                            </Link>
                        </Grid>
                    </Grid>
                    <Box display="flex" flexDirection="column" gap="10px">
                        <MyButton
                            sx={{
                                '&:disabled': {backgroundColor: '#7e57c2', color: '#5e5e5e'}
                            }}
                            size="large"
                            type="button"
                            disabled={isLoading}
                            fullWidth
                            variant="contained"
                            onClick={handleLoginButton}
                        >
                            {isLoading ? 'ㅤ' : 'Войти'}
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
                        <MyButton
                            fullWidth
                            size="large"
                            type="button"
                            variant='outlined'
                        >
                            Зарегистрироваться
                        </MyButton>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default Auth;
