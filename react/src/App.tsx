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
                        <Link to="/recipes">Recipes</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
