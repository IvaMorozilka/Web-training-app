import React from 'react';
import {SvgIcon} from "@mui/material";

const ClockIcon = (props) => {
    return (
        <SvgIcon {...props}>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 23.5C5.92487 23.5 1 18.5751 1 12.5C1 6.42487 5.92487 1.5 12 1.5C18.0751 1.5 23 6.42487 23 12.5C23 18.5751 18.0751 23.5 12 23.5ZM12 21.5C16.9706 21.5 21 17.4706 21 12.5C21 7.52944 16.9706 3.5 12 3.5C7.02944 3.5 3 7.52944 3 12.5C3 17.4706 7.02944 21.5 12 21.5ZM17 11.5H13V6.5H11V13.5H17V11.5Z"
                      fill="black"/>
            </svg>
        </SvgIcon>
    );
};

export default ClockIcon;