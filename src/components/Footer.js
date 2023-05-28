import React from 'react';
import {Box} from "@mui/material";

const Footer = (props) => {
    return <Box
        {...props}
        className="footer-background"
        sx={{width: "100%", height: "400px", marginTop: "auto"}}
    />;
};

export default Footer;