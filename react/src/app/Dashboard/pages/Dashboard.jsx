import React from "react";
import styled from "styled-components";
import { Planner } from "../components/Planner";
import { RecommendedPanel } from "../components/RecommendedPanel";
import { StatsPanel } from "../components/StatsPanel";

export const Dashboard = () => {
    return (
        <Main>
            <Planner />
            <StatsPanel />
            <RecommendedPanel />
        </Main>
    );
};

const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 380px;
    grid-template-rows: 1fr 380px;
    grid-template-areas:
        "planner stats"
        "planner recommended";
    gap: 1.5rem;
`;
