import System from "../../app/System/routes/index.jsx";
import React from "react";
import {Route, Routes} from "react-router-dom";

const AllRouters = () => (
    <Routes>
        <Route>
            <System/>
        </Route>
    </Routes>
);

export default AllRouters;
