import React from "react";
import {Avatar, Box, Button, Container, Paper, Stack, Typography} from "@mui/material";
import {grey, orange} from "@mui/material/colors";

const Account = () => {
    return (
        <Container sx = {{ height: '100vh', textAlign: 'center', pt: '64px'}} >
            <Box component={Paper} elevation={3} display={'inline-block'} p = {4} borderRadius={4}>
                <Stack>
                    <Avatar sx = {{width: '64px', height: '64px', bgcolor: orange[500], mx: 'auto'}}>OP</Avatar>
                    <Typography variant='subtitle2' pt={1}>Дата регистрации</Typography>
                    <Typography variant='body2' color={grey[600]}>06.06.2001</Typography>
                    <Stack direction={'row'} pt = {4} justifyContent={'space-between'}>
                        <Stack textAlign='left' spacing={0.5}>
                            <Typography variant='subtitle1'>Логин</Typography>
                            <Typography variant='subtitle1'>Электронная почта</Typography>
                            <Typography variant='subtitle1' pt = {3}>Имя</Typography>
                            <Typography variant='subtitle1'>Фамилия</Typography>
                            <Typography variant='subtitle1'>Отчество</Typography>
                            <Typography variant='subtitle1'>Дата рождения</Typography>
                            <Typography variant='subtitle1'>Номер телефона</Typography>
                        </Stack>
                        <Stack textAlign='left' spacing={0.5}>
                            <Typography variant={'subtitle1'} color = {grey[600]}>Логин</Typography>
                            <Typography variant={'subtitle1'} color = {grey[600]}>Электронная почта</Typography>
                            <Typography variant={'subtitle1'} pt = {3}>Имя</Typography>
                            <Typography variant={'subtitle1'}>Фамилия</Typography>
                            <Typography variant={'subtitle1'}>Отчество</Typography>
                            <Typography variant={'subtitle1'}>Дата рождения</Typography>
                            <Typography variant={'subtitle1'}>Номер телефона</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'}>
                        <Button variant='contained' color='error'>Удалить профиль</Button>
                        <Button variant='contained' color='success'>Сохранить изменения</Button>
                    </Stack>
                </Stack>
            </Box>
        </Container>
    )
};

export default Account;