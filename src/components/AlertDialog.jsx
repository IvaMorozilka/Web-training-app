import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useNavigate} from "react-router-dom";
import {LANDING_ROUTE} from "../utils/consts";
import {useContext} from "react";
import {Context} from "../index";

export default function AlertDialog({isOpen, ...props}) {
    const [open, setOpen] = React.useState(isOpen);
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const handleClose = () => {
        setOpen(false);
        navigate(-1);
    };
    const handleExit = () => {
        setOpen(false);
        user.setIsAuth(false);
        navigate(LANDING_ROUTE);
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Вы уже вошли. Хотите выйти?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Остаться</Button>
                    <Button onClick={handleExit} autoFocus>Выйти</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}