import {Box, CircularProgress, Typography} from "@mui/material";
import {AccessTime} from "@mui/icons-material";
import React, {useContext} from "react";
import {Context} from "../../index";

export const Progress = ({progress}) => {
    const { education } = useContext(Context);


    return (
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
                    value={progress}
                    color="secondary"
                    thickness={7}
                    size={46}
                />
            </Box>
            <Typography align="center" variant="subtitle2">
                20 мин.
            </Typography>
        </Box>
    )
}