import {RequireAuth} from "react-auth-kit";
import React from "react";
import {Route, Routes} from "react-router-dom";
import {Login} from "../../../pages/index.js";
import {Home} from "../pages/Home.jsx";

const System = () => (

    <>
    <Route path={'/'} element={
            <RequireAuth loginPath={'/login'}>
                <div>
                    <Home/>
                </div>
            </RequireAuth>
        }/>
        <Route path={'/login'} element={<Login/>}/>
    </>
);

export default System;
