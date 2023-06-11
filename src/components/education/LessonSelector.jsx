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
        window.scrollTo(
            {
                top: 60,
                behavior: 'smooth',
            }
        )
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
                        <Typography fontSize={{sm: '0.9rem', lg: '1.1rem'}} variant={'subtitle2'} lineHeight={1.2}>{block.blockTitle}</Typography>
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
                                    p={1}
                                    px={{xs: 1, lg: 2}}
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
                                    <Typography fontSize={{xs: '0.8rem' ,sm: '0.9rem', lg: '1rem'}} fontWeight="600">
                                        {lesson.id + ". " + lesson.title}
                                    </Typography>
                                    <Box
                                        alignItems="center"
                                        display="flex"
                                        justifyContent="center"
                                        flexDirection="column"
                                        position="relative"
                                    >
                                        <Box position="relative">
                                            <AccessTime
                                                shapeRendering="geometricPrecision"
                                                sx={{
                                                    filter: 'blur(.3px)',
                                                    fontSize: "30px",
                                                    position: "absolute",
                                                    top: 8,
                                                    left: 8,
                                                }}
                                            />
                                            <CircularProgress
                                                variant="determinate"
                                                value={lesson.progress}
                                                color="secondary"
                                                thickness={7}
                                                size={46}
                                            />
                                        </Box>
                                        <Typography align="center" variant="subtitle2" fontSize={{xs: '0.7rem'}}>
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