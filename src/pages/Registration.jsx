import { Container, Box, Typography, TextField } from "@mui/material";
import React, { useState } from "react";

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
        width="507px"
        height="581px"
        display="flex"
        flexDirection="column"
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
          <TextField
            fullWidth
            margin="normal"
            type="text"
            id="Логин"
            label="Логин"
            variant="standard"
            placeholder="Введите логин"
            sx = {{'& .MuiInput-underline:before' : {borderBottomColor: '#8859EC', '& .MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {borderBottom: '2px solid #8859EC'}}}}
          />
        </Box>
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
