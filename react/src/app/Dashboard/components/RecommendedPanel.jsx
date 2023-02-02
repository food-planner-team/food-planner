import React from "react";
import styled from "styled-components";

export const RecommendedPanel = () => {
    return (
        <MainRecommended>
            <RecommendedCard>
                <RecommendedCardHeader>
                    <CardHeaderTitle>POLECANE</CardHeaderTitle>
                    <CardHeaderText>Lorem ipsum dolor sit amet</CardHeaderText>
                </RecommendedCardHeader>
            </RecommendedCard>
        </MainRecommended>
    );
};

const MainRecommended = styled.div`
    grid-area: recommended;
    display: flex;
    gap: 3rem;
`;

const RecommendedCard = styled.div`
    height: 100%;
    background-color: #777;
    border-radius: 16px;
    flex: 1;
    padding: 1.5rem 0;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 245px;
        background: linear-gradient(to bottom, rgb(35, 35, 35), transparent);
        top: 0;
    }
`;

const RecommendedCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    width: 85%;
    margin: 0 auto;
    padding-left: 2.5rem;
    position: relative;

    &::before {
        content: "";
        height: calc(100% + 1.5rem);
        width: 25px;
        top: -1.5rem;
        left: 0;
        border-radius: 0px 0px 6px 6px;
        position: absolute;
        background-color: #2f4f4f;
    }
`;

const CardHeaderTitle = styled.div`
    font-size: 11px;
    letter-spacing: 0.8px;
    font-weight: 500;
    color: #aaa;
`;

const CardHeaderText = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: white;
`;
