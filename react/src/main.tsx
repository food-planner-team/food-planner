import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import { router } from "./plugins/router";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "react-auth-kit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <AuthProvider
            authType={"cookie"}
            authName={"_auth"}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
