import {
    Container,
    Box,
    Typography,
    Grid,
} from "@mui/material";
import React, {useState} from "react";
import MyTextField from "../ui/MyTextField";
import MyButton from "../ui/MyButton";
import {observer} from "mobx-react-lite";

const Registration =  observer(() => {
    const [regData, setRegData] = useState(null);

    function handleInputsChange(key, value) {
        console.log(regData);
    }

    function handleClick() {
        try {
            console.log(Object.keys(regData).length);
        } catch (e) {
            console.log(e.value);
        }
    }

    const fields = [
        {id: "email", type: 'email', label: "Электронная почта", placeholder: "Введите почту"},
        {id: "login", type: 'login', label: "Придумайте логин", placeholder: "Введите логин"},
        {id: "password",  type: 'password', label: "Придумайте пароль", placeholder: "Введите пароль"},
        {id: "repeat-password", type: 'password', label: "Повторите пароль", placeholder: "Введите пароль"},
        {id: "name", label: "Имя", placeholder: "Введите имя"},
        {id: "surname", label: "Фамилия", placeholder: "Введите фамилию"},
        {id: "patronymic", label: "Отчество", placeholder: "Введите отчество"},
        {id: "phone", label: "Номер телефона", placeholder: "Введите номер"},
    ];

    return (
        <Container sx={{display: "flex", justifyContent: "center", my: '50px'}}>
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
                        {fields.map((field, index) => (
                            <Grid item xs = {6} sm = {([4,5,6].includes(index)) ? 4 : 6}  key={field.id} alignItems={(index === fields.length - 1) ? 'center' : 'none'}>
                                <MyTextField
                                    fullWidth
                                    autoComplete='off'
                                    margin="dense"
                                    type={(field.type) ? field.type : 'text'}
                                    id={field.id}
                                    label={field.label}
                                    variant="outlined"
                                    placeholder={field.placeholder}
                                    onChange = {(e) => handleInputsChange(field.id, e.target.value)}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <MyButton
                    size="large"
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{my: "15px", width: "286px", borderRadius: '8px', py: '15px'}}
                >
                    Зарегистрироваться
                </MyButton>
            </Box>
        </Container>
    );
});

export default Registration;
