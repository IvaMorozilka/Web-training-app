import React, {useContext} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {EDUCATION_ROUTE, LANDING_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {RouteCheck} from "./RouteCheck";

const AppRouter = observer(() => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth &&
                authRoutes.map(({path, Component}) => (
                    <Route key={path} path={path} element={<Component/>} exact/>
                ))}
            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<RouteCheck><Component/></RouteCheck>} exact/>
            ))}
            <Route path="*" element={user.isAuth ? <Navigate to={EDUCATION_ROUTE}/> : <Navigate to={LANDING_ROUTE}/>}/>
        </Routes>
    );
});

export default AppRouter;