import React from "react";
import styled from "styled-components";

export const PlannerMealBlock = () => {
    return (
        <PlannerMealBlockContainer>
            <MealBlockSettings>
                <span className="material-symbols-outlined">
                    drag_indicator
                </span>
                <span className="material-symbols-outlined">more_vert</span>
                {/* <MealBlockToolbar>
                    <ToolbarElement>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        Zobacz danie
                    </ToolbarElement>
                    <ToolbarElement>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                        Usuń
                    </ToolbarElement>
                </MealBlockToolbar> */}
            </MealBlockSettings>
            <MealBlockImage></MealBlockImage>
            <MealBlockInformation>
                <MealBlockTitle>
                    Kurczak z ryżem w sosie słodkokwaśnym
                </MealBlockTitle>
            </MealBlockInformation>
        </PlannerMealBlockContainer>
    );
};

const PlannerMealBlockContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 70%;
    grid-template-rows: auto 1fr;
    gap: 0.85rem 1rem;
    grid-template-areas:
        "meal-settings meal-settings"
        "meal-image meal-information";
    border-radius: 8px;
    padding: 1rem;
    padding-top: 0.8rem;
    box-shadow: 2px 3px 12px rgba(0, 0, 0, 0.06);
`;

const MealBlockSettings = styled.div`
    grid-area: meal-settings;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

const MealBlockToolbar = styled.div`
    position: absolute;
    padding: 1rem;
    background-color: rgb(252, 252, 252);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.08);
    border: 1px solid #f2f2f2;
    border-radius: 12px;
    top: 2rem;
    right: 0;
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 12px;
    font-weight: 700;
    color: #2f4f4f;
    z-index: 2;
`;

const ToolbarElement = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

const MealBlockImage = styled.div`
    grid-area: meal-image;
    width: 100%;
    aspect-ratio: 1/1;
    background-color: #aaa;
    border-radius: 6px;
`;

const MealBlockInformation = styled.div`
    grid-area: meal-information;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`;

const MealBlockTitle = styled.div`
    font-size: 15px;
    font-weight: 700;
`;
