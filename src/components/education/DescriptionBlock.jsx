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
            height="auto"
            mt={2}
            p={2}
            sx={{
                borderRadius: "16px",
            }}
            component = {Paper} elevation = {6}
        >
            <Typography variant="h3" align="center" fontWeight='500' mb={2}>
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
                                                    width: "46px",
                                                    height: "46px",
                                                    backgroundColor: theme.palette.primary.main,
                                                }}
                                            >
                                                <Typography variant="h6">{index + 1}</Typography>
                                            </Avatar>
                                        </ListItemIcon>
                                        <ListItemText sx={{my: "auto"}}>
                                            <Typography variant="subtitle1" fontSize="1.2rem">
                                                {value}
                                            </Typography>
                                        </ListItemText>
                                    </Box>
                                </ListItem>
                            )
                        )}
                    </>
                ) : (
                    <Typography variant='h5' textAlign="center">Описание недоступно, пока не выбран урок.</Typography>
                )}
            </List>
        </Box>
    );
});