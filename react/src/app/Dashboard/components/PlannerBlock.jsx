import React from "react";
import styled, { css } from "styled-components";
import { PlannerMealBlock } from "./PlannerMealBlock";

export const PlannerBlock = ({ highlighted }) => {
    return (
        <PlannerBlockWrapper highlighted={highlighted}>
            <PlannerBlockHeader>
                <PlannerTitle>Wtorek</PlannerTitle>
                <PlannerText>02.01.2020</PlannerText>
            </PlannerBlockHeader>
            <PlannerBlockStats>
                <PlannerStatsElement>
                    Kalorie{" "}
                    <PlannerStatsElementHighlighted>
                        1234
                    </PlannerStatsElementHighlighted>
                </PlannerStatsElement>
                <PlannerStatsElement>
                    Dania{" "}
                    <PlannerStatsElementHighlighted>
                        4
                    </PlannerStatsElementHighlighted>
                </PlannerStatsElement>
            </PlannerBlockStats>
            <PlannerBlockContainer>
                <PlannerMealBlock />
                <PlannerMealBlock />
                <PlannerMealBlock />
                <PlannerMealBlock />
                <PlannerMealBlock />
                <PlannerMealBlock />
            </PlannerBlockContainer>
        </PlannerBlockWrapper>
    );
};

const PlannerBlockWrapper = styled.div`
    height: 100%;
    min-width: 355px;
    width: 355px;
    margin-right: 2rem;
    border-radius: 8px;
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    padding-right: 1rem;

    ${({ highlighted }) =>
        highlighted &&
        css`
            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 400px;
                background: linear-gradient(to bottom, #2f4f4f25, transparent);
                left: 0;
                top: 0;
                z-index: -1;
            }
        `}
`;

const PlannerBlockHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding-right: 1rem;
`;

const PlannerTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
`;

const PlannerText = styled.div`
    font-size: 12px;
    color: #888;
    font-weight: 500;
`;

const PlannerBlockStats = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding-right: 1rem;
`;

const PlannerStatsElement = styled.div`
    font-size: 10px;
    font-weight: 600;
    border-radius: 24px;
    letter-spacing: 0.3px;
    background-color: #2f4f4f;
    color: white;
    padding: 0.7rem 0;
    flex: 1;
    text-align: center;
    text-transform: uppercase;
`;

const PlannerStatsElementHighlighted = styled.span`
    color: #86a8a8;
    margin-left: 5px;
`;

const PlannerBlockContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 400px;
    padding-right: 1rem;
    padding-bottom: 2rem;
    overflow: auto;
`;
