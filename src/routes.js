import {
    ACCOUNT_ROUTE,
    AUTH_ROUTE,
    EDUCATION_ROUTE,
    LANDING_ROUTE,
    REGISTRATION_ROUTE,
    TRADING_ROUTE
} from "./utils/consts";
import Account from "./pages/Account";
import Trading from "./pages/Trading";
import Auth from "./pages/Auth";
import Education from "./pages/Education";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";

export const authRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: TRADING_ROUTE,
        Component: Trading
    },
    {
        path: EDUCATION_ROUTE,
        Component: Education
    },
]

export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: LANDING_ROUTE,
        Component: Landing
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },

]
