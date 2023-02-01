import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";

import { Home } from "../pages/Home.jsx";
import { Login } from "./System/pages/Login/Login";
import { Register } from "./System/pages/Register/Register";
import { NotFound } from "../pages/NotFound";
import { UnauthorizedLayout } from "./common/layouts/UnauthorizedLayout";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme";

export const App = () => {
    return (
        <AuthProvider
            authType={"cookie"}
            authName={"_auth"}
            cookieDomain={window.location.hostname}
            cookieSecure={false}
        >
            <ThemeProvider theme={theme}>
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
                        <Route
                            path={"/login"}
                            element={
                                <UnauthorizedLayout>
                                    <Login />
                                </UnauthorizedLayout>
                            }
                        />

                        <Route
                            path={"/register"}
                            element={
                                <UnauthorizedLayout>
                                    <Register />
                                </UnauthorizedLayout>
                            }
                        />

                        <Route path={"*"} element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
};
