import {Box, Container, Grid, Typography} from "@mui/material";
import React, {useState} from "react";
import AuthTextField from "../ui/AuthTextField";
import MyButton from "../ui/MyButton";
import {observer} from "mobx-react-lite";
import {AnimatePresence, motion} from "framer-motion";
import {clearError, isErrorsExist, isRegistrationDataValid, transformRegData, validateData} from "../utils/helpers";
import {register} from "../http/userAPI";
import InputMask from "react-input-mask";
import {$crm_host} from "../http";


const Registration = observer(() => {

    const [regData, setRegData] = useState(null);
    const [fields, setFields] = useState([
        {
            id: "email",
            type: "email",
            label: "Электронная почта",
            placeholder: "Введите почту",
            error: false,
            helperText: '',
        },
        {
            id: "login",
            type: "login",
            label: "Придумайте логин",
            placeholder: "Введите логин",
            error: false,
            helperText: '',
        },
        {
            id: "password",
            type: "password",
            label: "Придумайте пароль",
            placeholder: "Введите пароль",
            error: false,
            helperText: '',
        },
        {
            id: "repeatPassword",
            type: "password",
            label: "Повторите пароль",
            placeholder: "Введите пароль",
            error: false,
            helperText: '',
        },
        {id: "firstName", label: "Имя", placeholder: "Введите имя", error: false, helperText: ''},
        {id: "lastName", label: "Фамилия", placeholder: "Введите фамилию", error: false, helperText: ''},
        {id: "patronymic", label: "Отчество", placeholder: "Введите отчество", error: false, helperText: ''},
        {id: "phone", label: "Номер телефона", placeholder: "Введите номер", error: false, helperText: ''},
        {id: "birthday", label: 'Дата рождения', placeholder: 'Введите дату', error: false, helperText: ''},
    ])

    function handleInputsChange(key, value) {
        setRegData({...regData, [key]: value})
    }
    async function handleRegistration() {
        // if (!regData) return;
        // if (Object.keys(regData).length < 8) return;
        // const newFields = validateData(regData, fields);
        // if (isErrorsExist(newFields)){
        //     setFields(newFields);
        // }
        // else {
            const data = {
                "email": "mail@mail.ru",
                "login": "123123",
                "password": "1111111",
                "firstName": "11",
                "lastName": "11",
                "patronymic": "11",
                "phone": "72131231232",
                "birthday": "2001-06-05T20:00:00.000Z"
            }
            const response = await register(data)
            // console.log(response)
        // }
    }
    const gridLayout = (index) => {
        switch (index) {
            case 0:
            case 1:
                return 6;
            case 2:
            case 3:
            case 7:
            case 8:
                return 3;
            case 4:
            case 5:
            case 6:
                return 2;
        }
    }
    const maskInput = (index) => {
        switch (index) {
            case 7:
                return "+7 (999) 999 99 99"
            case 8:
                return "9999/99/99"
            default:
                return undefined;
        }
    }

    return (
        <AnimatePresence>
            <Container component={motion.div} sx={{display: "flex", justifyContent: "center", my: "50px"}}
                       initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}}
            >
                <Box
                    className="form-container box"
                    width="600px"
                    height="auto"
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
                        <Grid container spacing={1} justifyContent="center" columns={6}>
                            {fields.map((field, index) => (
                                <Grid
                                    item
                                    xs={2}
                                    sm={gridLayout(index)}
                                    key={field.id}
                                    alignItems={'center'}
                                >
                                    <InputMask
                                        mask = {maskInput(index)}
                                        onFocus = {() => setFields(clearError(field.id, fields))}
                                        maskPlaceholder = {index === fields.length - 1 && "ГГГГ/ММ/ДД"}
                                        onChange={(e) => handleInputsChange(field.id, e.target.value)}
                                    >
                                        <AuthTextField
                                            error = {field.error}
                                            helperText = {field.helperText}
                                            fullWidth
                                            autoComplete="off"
                                            margin="dense"
                                            type={field.type ? field.type : "text"}
                                            id={field.id}
                                            label={field.label}
                                            variant="outlined"
                                            placeholder={field.placeholder}
                                        />
                                    </InputMask>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                    <MyButton
                        size="large"
                        onClick={handleRegistration}
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{my: "15px", width: "286px", borderRadius: "8px", py: "15px"}}
                    >
                        Зарегистрироваться
                    </MyButton>
                </Box>
            </Container>
        </AnimatePresence>
    );
});

export default Registration;
