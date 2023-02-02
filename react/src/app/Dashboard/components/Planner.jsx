import React from "react";
import styled from "styled-components";
import { PlannerBlock } from "./PlannerBlock";

export const Planner = () => {
    return (
        <MainPlanner>
            <PlannerContainer>
                <PlannerBlock highlighted />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
                <PlannerBlock />
            </PlannerContainer>
        </MainPlanner>
    );
};

const MainPlanner = styled.div`
    grid-area: planner;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    overflow: hidden;
`;

const PlannerContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-bottom: 2rem;
`;
