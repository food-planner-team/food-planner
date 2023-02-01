import React from "react";
import { RequireAuth } from "react-auth-kit";
import { Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Register } from "../pages";
import { UnauthorizedLayout } from "../../common/layouts/UnauthorizedLayout";

export const SystemRoutes = () => {
    return (
        <Routes>
            <Route element={<UnauthorizedLayout />}>
                <Route path={"/login"} element={<Login />} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"*"} element={<NotFound />} />
            </Route>
        </Routes>
    );
};
