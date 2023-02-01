import React, { useState } from "react";
import Api from "../../../common/services/Api.jsx";

import { Link, useNavigate } from "react-router-dom";
import { useSignIn } from "react-auth-kit";
import {
    ButtonPrimary,
    ButtonSecondary,
    ElementHighlight,
    FooterElement,
    FormGroup,
    FormInput,
    GroupError,
    GroupTitle,
    HeaderTitle,
    LabelGroup,
    Panel,
    PanelFooter,
    PanelForm,
    PanelWrapper,
    PanelHeader,
} from "./Register.styled.js";

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const navigate = useNavigate();
    const signIn = useSignIn();
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        Api.post("/register", {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
        })
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
        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirmation("");
        setError("");
    };
    return (
        <Panel>
            <PanelWrapper>
                <PanelHeader>
                    <HeaderTitle>Panel rejestracji</HeaderTitle>
                </PanelHeader>
                <PanelForm onSubmit={handleSubmit}>
                    <label>
                        <LabelGroup>
                            <GroupTitle>Login</GroupTitle>
                        </LabelGroup>
                        <FormInput
                            type="text"
                            name="name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                    <label>
                        <LabelGroup>
                            <GroupTitle>Email</GroupTitle>
                        </LabelGroup>
                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
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
                    <label>
                        <LabelGroup>
                            <GroupTitle>Powtórz hasło</GroupTitle>
                        </LabelGroup>
                        <FormInput
                            type="password"
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            onChange={(event) =>
                                setPasswordConfirmation(event.target.value)
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
                        <ButtonPrimary type="submit">Załóż konto</ButtonPrimary>
                    </FormGroup>
                </PanelForm>
                <PanelFooter>
                    <Link to="/login">
                        <FooterElement>
                            Masz konto?
                            <ElementHighlight>Zaloguj się</ElementHighlight>
                        </FooterElement>
                    </Link>
                </PanelFooter>
            </PanelWrapper>
        </Panel>
    );
};
