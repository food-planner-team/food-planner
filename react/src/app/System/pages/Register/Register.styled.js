import styled, { keyframes } from "styled-components";

export const animationBgElement = keyframes`
    from {
        transform: rotate(120deg);

    }

    to {

        transform: rotate(160deg);
    }
`;

export const FormContainer = styled.div`
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
            rgba(70, 110, 102, 0.8),
            transparent
        );
        z-index: -1;
        box-shadow: 0px 0px 45px rgba(70, 110, 102, 0.1);
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
            rgba(70, 110, 102, 0.4),
            transparent
        );
        z-index: -1;
        box-shadow: 0px 0px 45px rgba(70, 110, 102, 0.1);
        animation: ${animationBgElement} 8s ease infinite alternate;
    }
`;

export const Panel = styled.div`
    box-shadow: 0px 16px 30px #7090b020;
    border-radius: 16px;
    width: 800px;
    min-height: 650px;
    margin: 0 2rem;
    padding: 2rem;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    background-color: rgba(255, 255, 255, 0.5);

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
        background-color: #ddd;
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
    color: #888;
    font-weight: 400;
`;

export const GroupError = styled.div`
    flex: 2;
    color: rgb(224, 37, 37);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    background-color: rgb(255, 236, 236);
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
    border: 1px solid #d2d2d2;
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
    background-color: rgb(70, 110, 102);
    border: 1px solid rgb(70, 110, 102);
    color: white;

    &:hover {
        background-color: rgb(60, 82, 77);
        border: 1px solid rgb(60, 82, 77);
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
    border: 1px solid rgb(70, 110, 102);
    color: rgb(70, 110, 102);

    &:hover {
        background-color: rgb(70, 110, 102);
        border: 1px solid rgb(70, 110, 102);
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
    color: #888;
`;

export const ElementHighlight = styled.span`
    font-weight: 700;
    color: #333;
    text-transform: uppercase;
`;
