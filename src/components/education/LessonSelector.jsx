import React, {useContext, useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CircularProgress,
    Divider,
    LinearProgress, Paper,
    Typography,
    useTheme
} from "@mui/material";
import {AccessTime, ExpandMore} from "@mui/icons-material";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {grey} from "@mui/material/colors";

const LessonSelector = observer(() => {
    const theme = useTheme();
    const {education} = useContext(Context);

    const [expanded, setExpanded] = useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleLessonClick = (lesson) => {
        education.addHistory(lesson);
        // window.scrollTo(
        //     {
        //         top: 0,
        //         behavior: 'smooth',
        //     }
        // )
        setExpanded(false);
    }


    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                borderRadius: "16px",
                overflow: 'auto',
            }}
            component = {Paper}
            elevation = {6}
        >
            {education.educationData.map((block) => (
                <Accordion
                    // TransitionProps={{
                    //     timeout: 500,
                    // }}
                    disableGutters
                    sx={{
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        "&:last-of-type": {
                            borderBottomLeftRadius: "16px",
                            borderBottomRightRadius: "16px",
                        },
                        "&:first-of-type": {
                            borderTopLeftRadius: "16px",
                            borderTopRightRadius: "16px",
                        },
                    }}
                    key={block.blockId}
                    expanded={expanded === `${block.blockId}`}
                    onChange={handleChange(`${block.blockId}`)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMore sx = {{color: '#fff', fontSize: '2rem'}}/>}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            "&.Mui-expanded": {
                                backgroundColor: theme.palette.primary.dark,
                                borderBottomRightRadius: "0px",
                                borderBottomLeftRadius: "0px",
                            },
                            transition:
                                "border-radius .1s ease-in-out, background-color .2s ease-in-out",
                            color: "#fff",
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: "inherit",
                            height: {xs:'56px',lg:'64px'},
                        }}
                    >
                        <Typography fontSize={{sm: '0.75rem', lg: '1.1rem'}} variant={'subtitle2'} lineHeight={{sm: 1, md: 1.2}}>{block.blockTitle}</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            p: "0",
                            backgroundColor: "#fff",
                            color: "#000",
                            borderRadius: "16px",
                        }}
                    >
                        <LinearProgress
                            variant="determinate"
                            value={block.blockProgress}
                            color="secondary"
                        />
                        {block.lessons.map((lesson, lesson_index) => (
                            <>
                                <Box
                                    onClick={() => handleLessonClick(lesson)}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    p={{xs: 0.5, md: 1}}
                                    px={{xs: 2, lg: 2}}
                                    key={lesson.id}
                                    sx={{
                                        backgroundColor: education.lastHistory(0).id === lesson.id ?  `${grey[300]}` : '#fff',
                                        cursor: "pointer",
                                        transition: "background-color 0.2s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: `${grey[200]}`,
                                        },
                                        borderRadius: '16px',
                                    }}
                                >
                                    <Typography fontSize={{xs: '0.8rem' ,sm: '0.6rem', md: '0.8rem', lg: '1rem'}} lineHeight={{sm: 1, md: 1.2}} fontWeight="600">
                                        {lesson.id + ". " + lesson.title}
                                    </Typography>
                                    <Box
                                        alignItems="center"
                                        display="flex"
                                        justifyContent="center"
                                        flexDirection="column"
                                        position="relative"
                                        py = {{xs: 0.5, md: 0}}
                                    >
                                        <Box position="relative">
                                            <AccessTime
                                                shapeRendering="geometricPrecision"
                                                sx={{
                                                    fontSize: {xs: '22px' ,md: "38px"},
                                                    position: "absolute",
                                                    top: 4,
                                                    left: 4,
                                                }}
                                            />
                                            <CircularProgress
                                                variant="determinate"
                                                value={lesson.progress}
                                                color="secondary"
                                                thickness={5}
                                                sx = {{
                                                    width: {xs: '30px!important',md: '46px!important'},
                                                    height: {xs: '30px!important',md: '46px!important'},
                                                }}
                                            />
                                        </Box>
                                        <Typography align="center" variant="subtitle2" fontSize={{xs: '0.55rem',md: '0.7rem', lg: '0.9rem' }}>
                                            {lesson.duration} мин.
                                        </Typography>
                                    </Box>
                                </Box>

                                {lesson_index === block.lessons.length - 1 ? (
                                    <></>
                                ) : (
                                    <Divider/>
                                )}
                            </>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
});

export default LessonSelector;