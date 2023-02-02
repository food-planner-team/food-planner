import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";

import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme";
import { SystemRoutes } from "./System/routes";
import { Home } from "./System/pages";
import { Dashboard2 } from "./Dashboard/pages/Dashboard2";
import { DefaultLayout } from "./common/layouts/DefaultLayout";
import { Header } from "./common/components/Header";
import { Footer } from "./common/components/Footer";
import { Dashboard } from "./Dashboard/pages/Dashboard";

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
                        <Route element={<DefaultLayout />}>
                            <Route
                                path={"/"}
                                element={
                                    <RequireAuth loginPath={"/login"}>
                                        <Dashboard />
                                    </RequireAuth>
                                }
                            />
                        </Route>
                        <Route path={"/dashboard"} element={<Dashboard2 />} />
                        <Route path={"*"} element={<SystemRoutes />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    );
};

{
    /* <Route
                            path={"/"}
                            element={
                                <RequireAuth loginPath={"/login"}>
                                    <Home />
                                </RequireAuth>
                            }
                        />
                        <Route element={<UnauthorizedLayout />}>
                            <Route path={"/login"} element={<Login />} />
                            <Route path={"/register"} element={<Register />} />
                            <Route path={"*"} element={<NotFound />} />
                        </Route> */
}
