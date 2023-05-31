import React, {useState} from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Grid,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import ExpandIcon from "../ui/Icons/ExpandIcon";
import {AccessTime} from "@mui/icons-material";
import mp4 from "../assets/1.mp4";
import ResponsivePlayer from "../components/player/ResponsivePlayer";

const Education = () => {
  const theme = useTheme();
  const [videoUrl, setVideoUrl] = useState(null);

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const data = [
    {
      blockId: 1,
      blockTitle: "Анализ ценовых колебаний",
      blockProgress: 20,
      lessons: [
        {
          id: 1,
          title: "Сведение ордеров",
          progress: 3,
          url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
        },
        {
          id: 2,
          title: "Анализ рынков",
          progress: 23,
          url: "https://www.youtube.com/watch?v=Wy2-BaGMPHc",
        },
        {
          id: 3,
          title: "Движение цены",
          progress: 100,
          url: "https://www.youtube.com/watch?v=Nq2sDZIvwDE",
        },
        {id: 4, title: "Флет", progress: 12, url: "../blablabla.mp4"},
        {id: 5, title: "Тренд", progress: 10, url: "../blablabla.mp4"},
        {id: 6, title: "Price Action", progress: 64, url: "../blablabla.mp4"},
      ],
    },
    {
      blockId: 2,
      blockTitle: "Взаимосвязь объёма и цены",
      blockProgress: 20,
      lessons: [
        {id: 7, title: "Взаимосвязь объёма и цены", progress: 100},
        {
          id: 8,
          title: "Объёмы как основной элемент движения рынка",
          progress: 100,
        },
        {id: 9, title: "Побарный анализ. Часть 1", progress: 0},
        {id: 10, title: "Побарный анализ. Часть 2", progress: 0},
        {id: 11, title: "Побарный анализ. Часть 3", progress: 0},
        {id: 12, title: "Побарный анализ. Часть 4", progress: 0},
        {id: 13, title: "Уровни", progress: 0},
        {id: 14, title: "Индикаторы", progress: 0},
        {id: 15, title: "Бонусный урок. Полезные ресурсы", progress: 0},
      ],
    },
    {
      blockId: 3,
      blockTitle: "Взаимосвязь объёма и цены",
      blockProgress: 20,
      lessons: [
        {id: 7, title: "Взаимосвязь объёма и цены", progress: 0},
        {
          id: 8,
          title: "Объёмы как основной элемент движения рынка",
          progress: 100,
        },
        {id: 9, title: "Побарный анализ. Часть 1", progress: 0},
        {id: 10, title: "Побарный анализ. Часть 2", progress: 0},
        {id: 11, title: "Побарный анализ. Часть 3", progress: 0},
        {id: 12, title: "Побарный анализ. Часть 4", progress: 0},
        {id: 13, title: "Уровни", progress: 0},
        {id: 14, title: "Индикаторы", progress: 0},
        {id: 15, title: "Бонусный урок. Полезные ресурсы", progress: 0},
      ],
    },
  ];
  const less = {
    id: 7,
    title: "Взаимосвязь объёма и цены",
    progress: 0,
    description:
        "Преимущество крупного капитала на финансовых рынках.Механика рыночных колебаний и сведение ордеров.Лента и стакан как элемент сырой биржевой информации.Принцип двойного аукциона на финансовых рынках.Манипуляции во флете как элемент теста ликвидности за границами справедливой стоимости инструмента",
  };

  return (
      <Box p={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  backgroundColor: "#ececec",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  overflow: "auto",
                }}
            >
              {data.map((block, block_index) => (
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
                                onClick={() => setVideoUrl(lesson.url)}
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
          </Grid>
          <Grid item xs={8}>
            <ResponsivePlayer url={videoUrl}/>
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
                {less.description.split(".").map((value, index) => (
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
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Education;
