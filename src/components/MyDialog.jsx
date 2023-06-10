import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MyDialog({isOpen, title, body, btnAgree, btnDisagree, setIsOpen}) {

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Dialog
            open={isOpen}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: '16px',
                }
            }}
        >
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {body}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>{btnDisagree}</Button>
                <Button onClick={handleClose}>{btnAgree}</Button>
            </DialogActions>
        </Dialog>
    );
}