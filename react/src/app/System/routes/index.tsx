import {Home} from "../pages/Home";
import Login from "../pages/Login";

const routers = [
    {
        path: "/",
        name: 'Home',
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    }
]

export default routers
