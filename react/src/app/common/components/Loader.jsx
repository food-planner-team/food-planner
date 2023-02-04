import React from "react";
import styled, { keyframes } from "styled-components";

export const Loader = () => {
    return <StyledDiv></StyledDiv>;
};

export const ldsDualRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledDiv = styled.div`
    display: inline-block;
    width: 80px;
    height: 80px;

    &:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #000000;
        border-color: #000000 transparent #000000 transparent;
        animation: ${ldsDualRing} 1.2s linear infinite;
    }
`;
