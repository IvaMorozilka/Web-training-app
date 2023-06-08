import {useContext} from "react";
import {Context} from "../index";
import AlertDialog from "./AlertDialog";

export const RouteCheck = ({children}) => {
    const {user} = useContext(Context);
    if (user.isAuth) {
        return <AlertDialog isOpen={true}/>;
    }
    return children;
}