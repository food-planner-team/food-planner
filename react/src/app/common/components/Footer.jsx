import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
            <p>Food Planner 2023</p>
        </StyledFooter>
    );
};

export const StyledFooter = styled.footer`
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.06);
    border-radius: 16px;
    font-size: 12px;
    color: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(25px);
`;
