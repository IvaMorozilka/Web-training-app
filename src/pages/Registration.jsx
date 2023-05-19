import styled from "@emotion/styled";
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import React, { useState } from "react";

const MyTextField = styled(TextField)({
  "&& .MuiInput-root:hover::before": {
    borderColor: "#A07AF0",
  },
  "&& .MuiInput-root": {
    color: "white",
  },
  "&& .MuiInput-root::before": {
    borderColor: "#A07AF0",
  },
  ".MuiInputLabel-root": {
    color: "#806FA6 !important",
    fontWeight: "500 !important",
  },
});

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
        className="form-container"
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
        <Button
          size="large"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: "15px", width: "286px", borderRadius: '8px', py: '15px' }}
        >
          Зарегистрироваться
        </Button>
      </Box>
    </Container>

    // <Container fluid className="justify-content-center mt-5">
    //     <Form className="reg-container d-flex flex-column justify-content-around mx-auto">
    //         <div className="reg-text text-center mt-1">Регистрация</div>
    //         <Container>
    //             <Form.Group className="mb-1" controlId="name">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Имя"
    //                 >
    //                     <Form.Control className="reg-input" type="text" placeholder="Имя"
    //                                   onChange={(e) => handleInputsChange("name", e.target.value)}/>
    //                 </FloatingLabel>
    //             </Form.Group>
    //             <Form.Group className="mb-1" controlId="surname">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Фамилия"
    //                 >
    //                     <Form.Control className="reg-input" type="text" placeholder="Фамилия"
    //                                   onChange={(e) => handleInputsChange("surname", e.target.value)}/>
    //                 </FloatingLabel>
    //             </Form.Group>
    //             <Form.Group className="mb-1" controlId="patronymic">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Отчество"
    //                 >
    //                     <Form.Control className="reg-input" type="text" placeholder="Отчество"
    //                                   onChange={(e) => handleInputsChange("patronymic", e.target.value)}/>
    //                 </FloatingLabel>
    //             </Form.Group>
    //             <Form.Group className="mb-1" controlId="login">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Придумайте логин"
    //                 >
    //                     <Form.Control className="reg-input" type="text" placeholder="Придумайте логин"
    //                                   onChange={(e) => handleInputsChange("login", e.target.value)}/>
    //                 </FloatingLabel>
    //             </Form.Group>
    //             <Form.Group className="mb-1" controlId="password">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Придумайте пароль"
    //                 >
    //                     <Form.Control className="reg-input" type="password"
    //                                   placeholder="Придумайте пароль"
    //                                   onChange={(e) => handleInputsChange("password", e.target.value)}/>
    //                 </FloatingLabel>
    //             </Form.Group>
    //             <Form.Group className="mb-1" controlId="rep-password">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Повторите пароль"
    //                 >
    //                     <Form.Control className="reg-input" type="password" placeholder="Повторите пароль"
    //                                   onChange={(e) => handleInputsChange("rep-password", e.target.value)}/>
    //                 </FloatingLabel>
    //             </Form.Group>
    //             <Form.Group className="mb-4" controlId="phone">
    //                 <FloatingLabel
    //                     controlId="floatingInput"
    //                     label="Номер мобильного телефона"
    //                 >
    //                     <Form.Control className="reg-input" type="phone"
    //                                   placeholder="Номер мобильного телефона"
    //                                   onChange={(e) => handleInputsChange("phone", e.target.value)}/>
    //                 </FloatingLabel>
    //
    //             </Form.Group>
    //         </Container>
    //         <Button className="reg-btn text-white mb-3" onClick={handleClick}>Зарегистрироваться</Button>
    //     </Form>
    // </Container>
  );
};

export default Registration;
