import {
    Avatar,
    Box, Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText, Paper,
    Typography,
    useTheme,
} from "@mui/material";
import React, {useContext} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {isEmptyArray} from "../../utils/helpers";

export const DescriptionBlock = observer(() => {
    const theme = useTheme();
    const {education} = useContext(Context);

    return (
        <Box
            height="100%"
            mt={2}
            p={2}
            sx={{
                borderRadius: "16px",
            }}
            component = {Paper} elevation = {6}
        >
            <Typography variant="h3" align="center" fontWeight='500' mb={2} sx = {{fontSize: {xs: '1.2rem', lg:'2rem'}}}>
                Что будет в данном уроке?
            </Typography>
            <Divider variant='middle'/>
            <List>
                {!isEmptyArray(education.history) ? (
                    <>
                        {education.lastHistory(0).description.split(".").map((value, index) =>
                            value.length === 0 ? (
                                <></>
                            ) : (
                                <ListItem alignItems="baseline">
                                    <Box
                                        display="flex"
                                        borderRadius="100px"
                                        pr={2}
                                        sx={{backgroundColor: "#fff", border: "1px solid #fff"}}
                                    >
                                        <ListItemIcon sx={{alignItems: "center"}}>
                                            <Avatar
                                                sx={{
                                                    width: {sm : "2rem",lg : "46px",},
                                                    height: {sm: "2rem",lg : "46px",},
                                                    backgroundColor: theme.palette.primary.main,
                                                }}
                                            >
                                                <Typography variant="h6">{index + 1}</Typography>
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText sx={{my: "auto"}}>
                                            <Typography variant="subtitle1" fontSize={{sm: '1rem', lg:'1.2rem'}}>
                                                {value}
                                            </Typography>
                                        </ListItemText>
                                    </Box>
                                </ListItem>
                            )
                        )}
                    </>
                ) : (
                    <Typography variant='h5' textAlign="center" sx = {{fontSize: {xs: '1rem', lg:'1.8rem'}}}>Описание недоступно, пока не выбран урок.</Typography>
                )}
            </List>
        </Box>
    );
});