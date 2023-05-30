import React from "react";
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
import ReactPlayer from "react-player";
import mp4 from "../assets/1.mp4";
import { AccessTime } from "@mui/icons-material";

const Education = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState("panel1");
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
          url: "../blablabla.mp4",
        },
        {
          id: 2,
          title: "Анализ рынков",
          progress: 23,
          url: "../blablabla.mp4",
        },
        {
          id: 3,
          title: "Движение цены",
          progress: 55,
          url: "../blablabla.mp4",
        },
        { id: 4, title: "Флет", progress: 12, url: "../blablabla.mp4" },
        { id: 5, title: "Тренд", progress: 10, url: "../blablabla.mp4" },
        { id: 6, title: "Price Action", progress: 64, url: "../blablabla.mp4" },
      ],
    },
    {
      blockId: 2,
      blockTitle: "Взаимосвязь объёма и цены",
      blockProgress: 20,
      lessons: [
        { id: 7, title: "Взаимосвязь объёма и цены", progress: 0 },
        {
          id: 8,
          title: "Объёмы как основной элемент движения рынка",
          progress: 0,
        },
        { id: 9, title: "Побарный анализ. Часть 1", progress: 0 },
        { id: 10, title: "Побарный анализ. Часть 2", progress: 0 },
        { id: 11, title: "Побарный анализ. Часть 3", progress: 0 },
        { id: 12, title: "Побарный анализ. Часть 4", progress: 0 },
        { id: 13, title: "Уровни", progress: 0 },
        { id: 14, title: "Индикаторы", progress: 0 },
        { id: 15, title: "Бонусный урок. Полезные ресурсы", progress: 0 },
      ],
    },
    {
      blockId: 3,
      blockTitle: "Взаимосвязь объёма и цены",
      blockProgress: 20,
      lessons: [
        { id: 7, title: "Взаимосвязь объёма и цены", progress: 0 },
        {
          id: 8,
          title: "Объёмы как основной элемент движения рынка",
          progress: 0,
        },
        { id: 9, title: "Побарный анализ. Часть 1", progress: 0 },
        { id: 10, title: "Побарный анализ. Часть 2", progress: 0 },
        { id: 11, title: "Побарный анализ. Часть 3", progress: 0 },
        { id: 12, title: "Побарный анализ. Часть 4", progress: 0 },
        { id: 13, title: "Уровни", progress: 0 },
        { id: 14, title: "Индикаторы", progress: 0 },
        { id: 15, title: "Бонусный урок. Полезные ресурсы", progress: 0 },
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
                  expandIcon={<ExpandIcon />}
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
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        p={1}
                        // sx={{ borderBottom: "1px solid black" }}
                        key={lesson.id}
                      >
                        <Typography fontSize="14px" fontWeight="600">
                          {lesson.id + ". " + lesson.title}
                        </Typography>
                        <Box
                          alignItems="center"
                          display="flex"
                          justifyContent="center"
                          position="relative"
                        >
                          <AccessTime
                            shapeRendering="geometricPrecision"
                            sx={{ fontSize: "30px", position: "absolute" }}
                          />
                          <CircularProgress
                            variant="determinate"
                            value={lesson.progress}
                            color="secondary"
                            thickness={5}
                            size={46}
                          />
                        </Box>
                      </Box>
                      {lesson_index === block.lessons.length - 1 ? (
                        <></>
                      ) : (
                        <Divider />
                      )}
                    </>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
        <Grid item xs={8}>
          {/*Video borders box*/}
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              background: "rgba(40,8,87,0.63)",
              borderRadius: "16px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Box position="relative" maxWidth="md" mx={3}>
              <ReactPlayer url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' width="100%" height="100%" controls />
              {/*TooDoo*/}
              {/*<Control/>*/}
            </Box>
          </Box>
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
                    sx={{ backgroundColor: "#fff", border: "1px solid #fff" }}
                  >
                    <ListItemIcon sx={{ alignItems: "center" }}>
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
                    <ListItemText sx={{ my: "auto" }}>
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
