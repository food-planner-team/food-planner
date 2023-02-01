import "./App.css";

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider, RequireAuth } from "react-auth-kit";

import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme/theme";
import { SystemRoutes } from "./System/routes";
import { Home } from "./System/pages";

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
