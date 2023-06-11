import {
    Avatar,
    Box,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
    useTheme,
} from "@mui/material";
import {AnimatePresence, motion} from 'framer-motion';
import React, {useContext, useState} from "react";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {isEmptyArray} from "../../utils/helpers";
import {ExpandLess} from "@mui/icons-material";

export const DescriptionBlock = observer(() => {
    const theme = useTheme();
    const {education} = useContext(Context);
    const [expanded, setExpanded] = useState(false);
    const handleClick = () => {
        setExpanded(!expanded);
        // window.scrollTo({
        //     top: 60,
        //     behavior: 'smooth',
        // })
    }
    const listVariants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: 0.1 * i,
            }
        }),
        hidden: i => ({
            opacity: 0,
            transition: {
                delay: -0.1 * i,
            }
        })
    }
    const boxVariants = {
        hidden: {
            height: 0,
            transition: {
                duration: 0.3,
                type: 'just',
            }
        },
        visible: {
            height: 'auto',
            transition: {
                duration: 0.5,
                type: 'spring',
            }
        }
    }
    // initial ={{height: 0}}
    // animate = {{height: 'auto'}}
    // exit = {{height: 0}}
    return (
        <Box
            height="100%"
            mt={2}
            p={2}
            sx={{
                borderRadius: "16px",
            }}
            component={Paper} elevation={6}
        >
            <Box position={'relative'}>
                <Typography variant="h3" align="center" fontWeight='500' component={motion.h3}
                            animate = {{marginBottom: expanded ? 12 : 0}}
                            sx={{fontSize: {xs: '1.1rem', lg: '2rem'}}}>
                    Что будет в данном уроке?
                </Typography>
                <motion.div
                    onClick={handleClick}
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: -5,
                        fontSize: '2rem',
                        display: 'flex',
                        cursor: 'pointer'
                    }}
                    initial={false}
                    animate={{rotate: expanded ? -180 : 0}}
                    transition={{
                        duration: .2,
                        type: 'just'
                    }}
                >
                    <ExpandLess fontSize={'inherit'}/>
                </motion.div>
            </Box>
            <AnimatePresence>
                {expanded &&
                    <Box
                        component={motion.div}
                        variants={boxVariants}
                        initial={'hidden'}
                        animate={'visible'}
                        exit={'hidden'}
                    >
                        <Box display={'flex'} justifyContent={'center'}>
                            <Divider
                                component={motion.hr}
                                initial={{opacity: 0, width: 0}}
                                animate={{opacity: 1, width: '100%'}}
                                exit={{opacity: 0, width: 0}}
                                transition={{duration: 0.4}}
                            />
                        </Box>
                        <List>
                            {!isEmptyArray(education.history) ? (
                                <>
                                    {education.lastHistory(0).description.split(".").map((value, index) =>
                                        value.length === 0 ? (
                                            <></>
                                        ) : (
                                            <ListItem
                                                alignItems="baseline"
                                            >
                                                <Box
                                                    display="flex"
                                                    borderRadius="100px"
                                                    pr={2}
                                                    sx={{backgroundColor: "#fff", border: "1px solid #fff"}}
                                                    component={motion.div}
                                                    variants={listVariants}
                                                    initial={'hidden'}
                                                    animate={'visible'}
                                                    exit={'hidden'}
                                                    custom={index}
                                                >
                                                    <ListItemIcon sx={{alignItems: "center"}}>
                                                        <Avatar
                                                            sx={{
                                                                width: {sm: "2rem", lg: "46px",},
                                                                height: {sm: "2rem", lg: "46px",},
                                                                backgroundColor: theme.palette.primary.main,
                                                            }}
                                                        >
                                                            <Typography variant="h6">{index + 1}</Typography>
                                                        </Avatar>
                                                    </ListItemIcon>
                                                    <ListItemText sx={{my: "auto"}}>
                                                        <Typography variant="subtitle1"
                                                                    fontSize={{sm: '1rem', lg: '1.2rem'}}>
                                                            {value}
                                                        </Typography>
                                                    </ListItemText>
                                                </Box>
                                            </ListItem>
                                        )
                                    )}
                                </>
                            ) : (
                                <Typography variant='h5' textAlign="center" component={motion.h5}
                                            initial = {{opacity: 0}} animate = {{opacity: 1}}
                                            exit = {{opacity:0}} transition = {{duration: .25}}
                                            sx={{fontSize: {xs: '1rem', lg: '1.8rem'}}}>Описание
                                    недоступно, пока не выбран урок.</Typography>
                            )}
                        </List>
                    </Box>
                }
            </AnimatePresence>


        </Box>
    );
});