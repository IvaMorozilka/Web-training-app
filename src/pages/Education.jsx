import React from 'react';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    CircularProgress,
    Container,
    Grid,
    Typography
} from "@mui/material";
import ExpandIcon from "../ui/Icons/ExpandIcon";
import {CustomAccordion, CustomAccordionSummary} from "../ui/CustomAccordion";
import ClockIcon from "../ui/Icons/ClockIcon";
import {customTheme} from "../mui/custom-theme";

const Education = () => {
    const data = [
        {
            "blockId": 1,
            "blockTitle": "Анализ ценовых колебаний",
            "lessons": [
                {"id": 1, "title": "Сведение ордеров", "process": "30"},
                {"id": 2, "title": "Анализ рынков", "process": "10"},
                {"id": 3, "title": "Движение цены", "process": "70"},
                {"id": 4, "title": "Флет", "process": "80"},
                {"id": 5, "title": "Тренд", "process": "100"},
                {"id": 6, "title": "Price Action", "process": "0"}
            ]
        },
        {
            "blockId": 2,
            "blockTitle": "Взаимосвязь объёма и цены",
            "lessons": [
                {"id": 7, "title": "Взаимосвязь объёма и цены", "process": "0"},
                {"id": 8, "title": "Объёмы как основной элемент движения рынка", "process": "0"},
                {"id": 9, "title": "Побарный анализ. Часть 1", "process": "0"},
                {"id": 10, "title": "Побарный анализ. Часть 2", "process": "0"},
                {"id": 11, "title": "Побарный анализ. Часть 3", "process": "0"},
                {"id": 12, "title": "Побарный анализ. Часть 4", "process": "0"},
                {"id": 13, "title": "Уровни", "process": "0"},
                {"id": 14, "title": "Индикаторы", "process": "0"},
                {"id": 15, "title": "Бонусный урок. Полезные ресурсы", "process": "0"}
            ]
        },
        {
            "blockId": 2,
            "blockTitle": "Взаимосвязь объёма и цены",
            "lessons": [
                {"id": 7, "title": "Взаимосвязь объёма и цены", "process": "0"},
                {"id": 8, "title": "Объёмы как основной элемент движения рынка", "process": "0"},
                {"id": 9, "title": "Побарный анализ. Часть 1", "process": "0"},
                {"id": 10, "title": "Побарный анализ. Часть 2", "process": "0"},
                {"id": 11, "title": "Побарный анализ. Часть 3", "process": "0"},
                {"id": 12, "title": "Побарный анализ. Часть 4", "process": "0"},
                {"id": 13, "title": "Уровни", "process": "0"},
                {"id": 14, "title": "Индикаторы", "process": "0"},
                {"id": 15, "title": "Бонусный урок. Полезные ресурсы", "process": "0"}
            ]
        }
    ]

    return (
        <Box minHeight='980px' p={2}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    {data.map((block, index) =>
                        <Accordion disableGutters sx={{
                            background: customTheme.palette.primary.main,
                            color: '#fff',
                            "&:last-child": {
                                borderBottomLeftRadius: '16px',
                                borderBottomRightRadius: '16px'
                            }, "&:first-child": {borderTopLeftRadius: '16px', borderTopRightRadius: '16px'},
                        }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandIcon/>}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>{block.blockTitle}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{p: '0', backgroundColor: '#fff', color: '#000'}}>
                                {block.lessons.map((lesson, index1) =>
                                    <Box display='flex' justifyContent='space-between' alignItems='center' p={1}
                                         sx={{borderTop: '1px solid black'}}>
                                        <Typography fontSize='14px' fontWeight='600'>
                                            {lesson.id + ". " + lesson.title}
                                        </Typography>
                                        <Box alignItems='center' display='flex' justifyContent='center'
                                             position='relative'>
                                            <ClockIcon sx={{fontSize: '30px', position: 'absolute'}}/>
                                            <CircularProgress variant='determinate' value={lesson.process}
                                                              color='secondary' thickness={5}
                                                              size={46}/>
                                        </Box>
                                    </Box>
                                )}
                            </AccordionDetails>
                        </Accordion>
                    )}


                    {/*<CustomAccordion>*/}
                    {/*    <CustomAccordionSummary*/}
                    {/*        expandIcon={<ExpandIcon/>}*/}
                    {/*        aria-controls="panel1a-content"*/}
                    {/*        id="panel1a-header"*/}
                    {/*    >*/}
                    {/*        <Typography>Блок I Анализ ценовых колебаний</Typography>*/}
                    {/*    </CustomAccordionSummary>*/}
                    {/*    <AccordionDetails>*/}
                    {/*        <Box display='flex' justifyContent='space-between' alignItems='center' my={1}>*/}
                    {/*            <Typography fontSize='14px' fontWeight='600'>*/}
                    {/*                1. Сведение ордеров*/}
                    {/*            </Typography>*/}
                    {/*            <Box alignItems='center' display='flex' justifyContent='center'>*/}
                    {/*                <ClockIcon sx={{fontSize: '30px', position: 'absolute'}}/>*/}
                    {/*                <CircularProgress variant='determinate' value={70} color='secondary' thickness={5}*/}
                    {/*                                  size={46}/>*/}
                    {/*            </Box>*/}
                    {/*        </Box>*/}
                    {/*    </AccordionDetails>*/}
                    {/*</CustomAccordion>*/}


                </Grid>
                <Grid item xs={8}>
                    <Box height={600} sx={{background: 'red', borderRadius: '16px'}}>

                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Education;