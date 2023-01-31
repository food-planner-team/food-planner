import React, { useState } from "react";
import Api from "../../../common/services/Api.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import {
    ButtonPrimary,
    ButtonSecondary,
    ElementHighlight,
    FooterElement,
    FormContainer,
    FormGroup,
    FormInput,
    GroupError,
    GroupTitle,
    HeaderTitle,
    LabelGroup,
    Panel,
    PanelFooter,
    PanelForm,
    PanelHeader,
    PanelWrapper,
} from "./Login.styled.js";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const signIn = useSignIn();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        Api.post("/login", { email, password })
            .then((response) => {
                signIn({
                    token: response.data.token,
                    expiresIn: response.data.expiresIn || 3600,
                    tokenType: "Bearer",
                    authState: {},
                });
                navigate("/");
            })
            .catch((e) => {
                setError("Podane dane są nieprawidłowe");
            });
    };

    const handleReset = () => {
        setEmail("");
        setPassword("");
        setError("");
    };
    return (
        <>
            <FormContainer>
                <Panel>
                    <PanelWrapper>
                        <PanelHeader>
                            <HeaderTitle>Panel logowania</HeaderTitle>
                        </PanelHeader>
                        <PanelForm onSubmit={handleSubmit}>
                            <label>
                                <LabelGroup>
                                    <GroupTitle>Email</GroupTitle>
                                </LabelGroup>
                                <FormInput
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                />
                            </label>
                            <label>
                                <LabelGroup>
                                    <GroupTitle>Hasło</GroupTitle>
                                </LabelGroup>
                                <FormInput
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                />
                            </label>
                            <GroupError>{error}</GroupError>
                            <FormGroup>
                                <ButtonSecondary
                                    type="reset"
                                    value="Wyczyść"
                                    onClick={handleReset}
                                />
                                <ButtonPrimary type="submit">
                                    Zaloguj
                                </ButtonPrimary>
                            </FormGroup>
                        </PanelForm>
                        <PanelFooter>
                            {/* <FooterElement>
                            Nie możesz się zalogować?
                            <ElementHighlight> Zresetuj hasło</ElementHighlight>
                        </FooterElement> */}
                            {/* TODO: add reset passowrd */}
                            <Link to="/register">
                                <FooterElement>
                                    Nie masz konta?
                                    <ElementHighlight>
                                        Założ konto
                                    </ElementHighlight>
                                </FooterElement>
                            </Link>
                        </PanelFooter>
                    </PanelWrapper>
                </Panel>
            </FormContainer>
        </>
    );
};
