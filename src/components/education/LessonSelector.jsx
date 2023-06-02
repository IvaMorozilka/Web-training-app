import React, {useContext, useState} from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    CircularProgress,
    Divider,
    LinearProgress,
    Typography,
    useTheme
} from "@mui/material";
import ExpandIcon from "../../ui/Icons/ExpandIcon";
import {AccessTime} from "@mui/icons-material";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const LessonSelector = observer(() => {
    const theme = useTheme();
    const {education} = useContext(Context);

    const [expanded, setExpanded] = useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const handleLessonClick = (lesson) => {
        education.addHistory(lesson);
    }


    return (
        <Box
            sx={{
                height: "100%",
                borderRadius: "16px",
                backgroundColor: "#ececec",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                overflow: "auto",
            }}
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
                        expandIcon={<ExpandIcon/>}
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
                            height: '64px',
                        }}
                    >
                        <Typography>{block.blockTitle}</Typography>
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
                                    px={2}
                                    key={lesson.id}
                                    sx={{
                                        cursor: "pointer",
                                        transition: "background-color 0.2s ease-in-out",
                                        "&:hover": {
                                            backgroundColor: "#ececec",
                                        },
                                    }}
                                >
                                    <Typography fontSize="14px" fontWeight="600">
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
                                        <Typography align="center" variant="subtitle2">
                                            20 мин.
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