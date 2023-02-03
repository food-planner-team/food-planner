import React, { Fragment } from "react";
import styled from "styled-components";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export const PlannerMealBlock = ({ id }) => {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    const styleSpanButton = {
        cursor: isDragging ? "grabbing" : "grab",
    };

    const styleMealBlock = {
        transform: isDragging ? "scale(1.03)" : "scale(1)",
        boxShadow: isDragging
            ? "2px 3px 12px rgba(0, 0, 0, 0.2)"
            : "2px 3px 12px rgba(0, 0, 0, 0.06)",
    };

    return (
        <div ref={setNodeRef} style={style}>
            <PlannerMealBlockContainer style={styleMealBlock}>
                <MealBlockSettings>
                    <SpanButton
                        className="material-symbols-outlined"
                        {...attributes}
                        {...listeners}
                        style={styleSpanButton}
                    >
                        drag_indicator
                    </SpanButton>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button>
                                <SpanButton className="material-symbols-outlined">
                                    more_vert
                                </SpanButton>
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <ToolbarElement
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                <span className="material-symbols-outlined">
                                                    search
                                                </span>
                                                Zobacz danie
                                            </ToolbarElement>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <ToolbarElement
                                                href="#"
                                                className={classNames(
                                                    active
                                                        ? "bg-gray-100 text-gray-900"
                                                        : "text-gray-700",
                                                    "block px-4 py-2 text-sm"
                                                )}
                                            >
                                                <span className="material-symbols-outlined">
                                                    delete
                                                </span>
                                                Usuń
                                            </ToolbarElement>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </MealBlockSettings>
                <MealBlockImage></MealBlockImage>
                <MealBlockInformation>
                    <MealBlockTitle>{id}</MealBlockTitle>
                </MealBlockInformation>
            </PlannerMealBlockContainer>
        </div>
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

const SpanButton = styled.span`
    padding: 3px 0;
    border-radius: 6px;
    transition: background-color 0.2s ease-out;

    &:hover {
        background-color: #dfdfdf;
    }
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
