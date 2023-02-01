import React from "react";
import styled, { keyframes } from "styled-components";

export const UnauthorizedLayout = ({ children }) => {
    return <Container>{children}</Container>;
};

export const animationBgElement = keyframes`
    from {
        transform: rotate(120deg);

    }

    to {

        transform: rotate(160deg);
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;

    &:after {
        content: "";
        position: absolute;
        width: 550px;
        height: 550px;
        left: -14rem;
        bottom: -14rem;
        border-radius: 154px 123px 234px 520px;
        transform: rotate(100deg);
        background: linear-gradient(
            to top,
            ${({ theme }) => theme.colors.primary},
            transparent
        );
        z-index: -1;
        box-shadow: 0px 0px 45px ${({ theme }) => theme.colors.boxShadow};
        animation: ${animationBgElement} 8s ease infinite alternate;
    }

    &:before {
        content: "";
        position: absolute;
        width: 450px;
        height: 450px;
        right: -14rem;
        top: -14rem;
        border-radius: 54px 123px 434px 20px;
        transform: rotate(180deg);
        background: linear-gradient(
            to top,
            ${({ theme }) => theme.colors.primary},
            transparent
        );
        z-index: -1;
        box-shadow: 0px 0px 45px ${({ theme }) => theme.colors.boxShadow};
        animation: ${animationBgElement} 8s ease infinite alternate;
    }
`;
