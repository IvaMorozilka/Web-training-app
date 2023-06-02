import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
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
                backgroundColor: "#ececec",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
        >
            <Typography variant="h3" align="center" mb={2}>
                ОСНОВНЫЕ ТЕМЫ
            </Typography>
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
                    ""
                )}
            </List>
        </Box>
    );
});