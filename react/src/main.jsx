import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes} from "react-router-dom";
import {AuthProvider, RequireAuth} from "react-auth-kit";
import AllRouters from "./plugins/router/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider
            authType={"cookie"}
            authName={"_auth"}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <BrowserRouter>
                <AllRouters/>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
