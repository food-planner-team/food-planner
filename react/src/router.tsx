import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login, NotFound, Signup, User } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/user",
        element: <User />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);
