import React, { useState } from "react";
import styled, { css } from "styled-components";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { PlannerMealBlock } from "./PlannerMealBlock";

export const PlannerBlock = ({ highlighted, data, date }) => {
    const filteredData = data.filter((el) => el.date === date);

    const [meals, setMeals] = useState(filteredData.map((el) => el.name));

    const d = new Date(`${date}`);
    let numberOfDay = d.getDay();
    let day;

    switch (numberOfDay) {
        case 0:
            day = "Niedziela";
            break;
        case 1:
            day = "Poniedziałek";
            break;
        case 2:
            day = "Wtorek";
            break;
        case 3:
            day = "Środa";
            break;
        case 4:
            day = "Czwartek";
            break;
        case 5:
            day = "Piątek";
            break;
        case 6:
            day = "Sobota";
    }

    const handleDragEnd = (e) => {
        const { active, over } = e;

        if (active.id !== over.id) {
            setMeals((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);

                return arrayMove(items, activeIndex, overIndex);
            });
        }
    };

    return (
        <PlannerBlockWrapper highlighted={highlighted}>
            <PlannerBlockHeader>
                <PlannerTitle>{day}</PlannerTitle>
                <PlannerText>{date}</PlannerText>
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
                        {meals.length}
                    </PlannerStatsElementHighlighted>
                </PlannerStatsElement>
            </PlannerBlockStats>
            <DndContext
                collisionDetection={closestCenter}
                onDragEnd={handleDragEnd}
            >
                <PlannerBlockContainer>
                    <SortableContext
                        items={meals}
                        strategy={verticalListSortingStrategy}
                    >
                        {meals.map((meal) => (
                            <PlannerMealBlock key={meal} id={meal} />
                        ))}
                    </SortableContext>
                </PlannerBlockContainer>
            </DndContext>
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
