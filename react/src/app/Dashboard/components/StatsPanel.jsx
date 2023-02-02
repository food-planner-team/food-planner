import React from "react";
import styled from "styled-components";

export const StatsPanel = () => {
    return (
        <MainStats>
            <MainStatsHeader>
                <StatsHeaderTitle>
                    Statystyki (ilość kalorii dziennie)
                </StatsHeaderTitle>
                <StatsHeaderText>
                    Najbliższy plan tygodniowy (01.01.2020 - 07.01.2020)
                </StatsHeaderText>
            </MainStatsHeader>
            <MainStatsContainer>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>01/01</StatsElementText>
                </StatsElement>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>02/01</StatsElementText>
                </StatsElement>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>03/01</StatsElementText>
                </StatsElement>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>04/01</StatsElementText>
                </StatsElement>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>05/01</StatsElementText>
                </StatsElement>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>06/01</StatsElementText>
                </StatsElement>
                <StatsElement>
                    <StatsElementBar>
                        <StatsElementBarInner />
                    </StatsElementBar>
                    <StatsElementText>07/01</StatsElementText>
                </StatsElement>
            </MainStatsContainer>
        </MainStats>
    );
};

const MainStats = styled.div`
    grid-area: stats;
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    backdrop-filter: blur(25px);
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;

const MainStatsHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
`;

const StatsHeaderTitle = styled.div`
    font-size: 18px;
    font-weight: 800;
`;

const StatsHeaderText = styled.div`
    font-size: 12px;
    font-weight: 500;
    color: #aaa;
`;

const MainStatsContainer = styled.div`
    flex: 4;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0;
    padding-bottom: 0;
`;

const StatsElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
`;

const StatsElementBar = styled.div`
    width: 26px;
    height: 100%;
    background-color: #2f4f4f10;
    border-radius: 16px;
    position: relative;
`;

const StatsElementBarInner = styled.div`
    height: 50%;
    width: 100%;
    background-color: #2f4f4f;
    border-radius: 16px;
    position: absolute;
    bottom: 0;
`;

const StatsElementText = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: #aaa;
`;
