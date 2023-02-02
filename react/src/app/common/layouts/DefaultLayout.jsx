import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const DefaultLayout = () => {
    return (
        <Container>
            <Header />
            <Outlet />
            <Footer />
        </Container>
    );
};

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 3rem;
    display: grid;
    grid-template-rows: 80px 1fr 40px;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 960px;
        height: 840px;
        background: linear-gradient(
            37.5deg,
            rgba(47, 79, 79, 0.2) 49.07%,
            rgba(47, 79, 79, 0) 73.29%
        );
        transform: rotate(10deg);
        left: -15%;
        bottom: -20%;
        border-radius: 434px 123px 213px 132px;
        z-index: -1;
    }

    &::after {
        content: "";
        position: absolute;
        width: 590px;
        height: 518px;
        background: linear-gradient(
            37.5deg,
            rgba(47, 79, 79, 0.2) 49.07%,
            rgba(47, 79, 79, 0) 73.29%
        );
        transform: rotate(180deg);
        right: -10%;
        top: -10%;
        border-radius: 434px 123px 213px 132px;
        z-index: -1;
    }
`;
