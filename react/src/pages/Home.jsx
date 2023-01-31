import React from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const signOut = useSignOut();
    const navigate = useNavigate();

    const logout = () => {
        signOut();
        navigate("/login");
    };

    return (
        <div>
            Home
            <button onClick={logout}>Wyloguj</button>
        </div>
    );
};
