import styled, { keyframes } from "styled-components";

export const Panel = styled.div`
    box-shadow: 0px 16px 30px ${({ theme }) => theme.colors.boxShadow};
    border-radius: 16px;
    width: 800px;
    min-height: 650px;
    margin: 0 2rem;
    padding: 2rem;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    background-color: ${({ theme }) => theme.colors.backgroundAlpha};

    @media screen and (max-width: 600px) {
        height: 700px;
    }
`;

export const PanelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 620px;
`;

export const PanelHeader = styled.div`
    height: 15%;
`;

export const HeaderTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        width: 40%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.white};
        top: 50%;
        margin-left: 1.5rem;
    }
`;

export const PanelForm = styled.form`
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const LabelGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.65rem;
    font-size: 13px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

export const GroupTitle = styled.div`
    flex: 1;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 400;
`;

export const GroupError = styled.div`
    flex: 2;
    color: ${({ theme }) => theme.colors.error};
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    background-color: ${({ theme }) => theme.colors.errorBackground};
    padding: 0.6rem 1rem;
    border-radius: 12px;
    margin-top: 10px;

    &:empty {
        display: none;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 24px;
    border: 1px solid ${({ theme }) => theme.colors.white};
`;

export const FormGroup = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    gap: 2rem;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
    }
`;

export const ButtonPrimary = styled.button`
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

export const ButtonSecondary = styled.input`
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
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
        background-color: ${({ theme }) => theme.colors.primary};
        border: 1px solid ${({ theme }) => theme.colors.primary};
        color: white;
    }
`;

export const PanelFooter = styled.div`
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
`;

export const FooterElement = styled.div`
    font-size: 12px;
    color: ${({ theme }) => theme.colors.grey};
`;

export const ElementHighlight = styled.span`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.typographyDark};
    text-transform: uppercase;
`;
