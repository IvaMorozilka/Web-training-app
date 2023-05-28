import React, {useContext} from 'react';
import {Box, SvgIcon, Typography} from "@mui/material";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Footer = observer((props) => {
    const {user} = useContext(Context);
    return (
        user.isAuth
            ?
            <>
                <Box sx={{
                    height: '60px',
                    width: '100%',
                    background: '#7E57C2',
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Typography variant='body1' color='#FFF' fontSize='20px'>
                        Обучающая платформа VANILL' , 2023
                    </Typography>
                </Box>
            </>
            :
            <Box
                {...props}
                className="footer-background"
                sx={{width: "100%", height: "400px", marginTop: "auto"}}
            />
    );
});

export default Footer;