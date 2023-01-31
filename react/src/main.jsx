import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";
import { Home } from "./pages/Home.jsx";
import { Login } from "./app/System/pages/Login/Login";
import { Register } from "./app/System/pages/Register/Register";
import { NotFound } from "./pages/NotFound";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider
            authType={"cookie"}
            authName={"_auth"}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <BrowserRouter>
                <Routes>
                    <Route
                        path={"/"}
                        element={
                            <RequireAuth loginPath={"/login"}>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/register"} element={<Register />} />
                    <Route path={"*"} element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    </React.StrictMode>
);
