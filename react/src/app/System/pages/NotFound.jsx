import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// import notFoundSvg from "../assets/page-not-found.svg";

export const NotFound = () => {
    return (
        <Container>
            {/* <StyledImg src={notFoundSvg} alt="page not found img" /> */}
            <h1>Page not found</h1>
            <StyledLink to={"/"}>Powrót</StyledLink>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    width: 100%;
    border-radius: 16px;
    border: none;
    padding: 0.8rem 0;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.3px;
    transition: 0.45s ease;
    background-color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: white;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryAccent};
        border: 1px solid ${({ theme }) => theme.colors.primaryAccent};
    }
`;

const StyledImg = styled.img`
    width: 400px;
`;
