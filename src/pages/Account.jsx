import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import { CustomButton } from "../ui/CustomButton";
import { ArrowBackIos } from "@mui/icons-material";
import MyDialog from "../components/MyDialog";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);
  const fillData = [
    "Логин",
    "Электронная почта",
    "Имя",
    "Фамилия",
    "Отчество",
    "Дата рождения",
    "Номер телефона",
  ];
  const [newData, setNewData] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <Container sx={{ height: "100vh", textAlign: "center", pt: "64px" }}>
      <Box
        component={Paper}
        elevation={3}
        display={"inline-block"}
        p={4}
        borderRadius={4}
        position={"relative"}
      >
        <Button
          startIcon={<ArrowBackIos />}
          variant={"outlined"}
          size={"small"}
          sx={{ position: "absolute", top: 16, left: 16 }}
          onClick={() => navigate(-1)}
        >
          Назад
        </Button>
        <Stack>
          <Avatar
            sx={{
              width: "64px",
              height: "64px",
              bgcolor: orange[500],
              mx: "auto",
            }}
          >
            OP
          </Avatar>
          <Typography variant="subtitle2" pt={1}>
            Дата регистрации
          </Typography>
          <Typography variant="body2" color={grey[600]}>
            06.06.2001
          </Typography>
          <Stack direction={"row"} pt={4} justifyContent={"center"} spacing={2}>
            <Stack textAlign="left" spacing={0.5}>
              {fillData.map((value) => (
                <Typography
                  key={Math.random()}
                  pt={value === "Имя" && 3}
                  variant="subtitle1"
                >
                  {value}
                </Typography>
              ))}
            </Stack>
            <Stack textAlign="left" spacing={0.5} flexWrap={"wrap"}>
              {fillData.slice(0, 2).map((value) => (
                <Typography
                  key={Math.random()}
                  color={grey[600]}
                  variant="subtitle1"
                >
                  {value}
                </Typography>
              ))}
              {fillData.slice(2).map((value, index) => {
                if (isEditMode)
                  return (
                    <TextField
                      onChange={(e) =>
                        setNewData({ ...newData, [value]: e.target.value })
                      }
                      key={value}
                      sx={{
                        p: 0,
                        pt: index === 0 ? 2.9 : undefined,
                        "& .MuiInput-input": { pb: 0.2, width: "161px" },
                      }}
                      variant={"standard"}
                      placeholder={value}
                    />
                  );
                else
                  return (
                    <Typography
                      key={value}
                      pt={index === 0 && 3}
                      variant="subtitle1"
                    >
                      {value}
                    </Typography>
                  );
              })}
            </Stack>
          </Stack>
          <Stack
            direction={"column-reverse"}
            pt={4}
            spacing={1}
            justifyContent={"center"}
          >
            <CustomButton
              variant="contained"
              color="error"
              onClick={() => setOpen(!open)}
            >
              Удалить профиль
            </CustomButton>
            <CustomButton
              variant={isEditMode ? "contained" : "outlined"}
              color="success"
              textColor={isEditMode ? "#fff" : grey[600]}
              onClick={() => setIsEditMode(!isEditMode)}
            >
              {" "}
              {isEditMode ? "Сохранить изменения" : "Изменить данные"}
            </CustomButton>
          </Stack>
        </Stack>
      </Box>
      <MyDialog
        isOpen={open}
        setIsOpen={setOpen}
        title={"Внимание, действие не может быть отменено."}
        body={
          "Вы действительно хотите удалить свой профиль и потерять все данные, связванные с ним?"
        }
        btnAgree={"Удалить"}
        btnDisagree={"Отмена"}
      />
    </Container>
  );
};

export default Account;
