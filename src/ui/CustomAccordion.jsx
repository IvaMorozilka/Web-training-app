import styled from "@emotion/styled";
import {Accordion, AccordionSummary} from "@mui/material";


export const CustomAccordion = styled(Accordion, {shouldForwardProp: (prop) => prop !== 'round' && prop !== 'textColor'})(({theme}) => ({
    '&.Mui-expanded':{
        marginBottom: '0',
        marginTop: '1px',
    },
}));

export const CustomAccordionSummary = styled(AccordionSummary, {shouldForwardProp: (prop) => prop !== 'round' && prop !== 'textColor'})(({theme}) => ({

}));