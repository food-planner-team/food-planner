import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home, Login, NotFound, Signup, User } from "./pages";

export const App = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/user" element={<User />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
