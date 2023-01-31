import React from "react";
import { RequireAuth } from "react-auth-kit";
import { Route } from "react-router-dom";
import { Home } from "../../../pages/Home";
import { Login } from "../pages/Login";

export const SystemRoutes = () => {
    return (
        <>
            <Route
                path={"/"}
                element={
                    <RequireAuth loginPath={"/login"}>
                        <div>
                            <Home />
                        </div>
                    </RequireAuth>
                }
            />
            <Route path={"/login"} element={<Login />} />
        </>
    );
};
