import {CHAT_ROUTE, LOGIN_ROUTE, HOME_ROUTE} from "./utils/consts";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat"
import uniteComponents from "./components/uniteComponents/uniteComponents";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },

    {
        path: HOME_ROUTE,
        Component: uniteComponents
    }
]


export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    },
    
    {
        path: HOME_ROUTE,
        Component: uniteComponents
    }
]