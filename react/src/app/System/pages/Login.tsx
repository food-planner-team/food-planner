import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import axios, { AxiosError } from "axios";
import "./Login.css";
import { useSignIn } from "react-auth-kit";

function Login(poprs: any) {
    const [error, setError] = useState("");
    const signIn = useSignIn();

    const onSubmit = async (values: any) => {
        console.log("Values:", values);
        setError("");

        try {
            const response = await axios.post(
                "http://food-planner.test/api/v1/login",
                values
            );

            signIn({
                token: response.data.token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { email: values.email },
            });
        } catch (err) {
            if (err && err instanceof AxiosError)
                setError(err.response?.data.message);
            else if (err && err instanceof Error) setError(err.message);

            console.log("Error: ", err);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit,
    });

    return (
        <>
            <main className="main">
                <div className="main__panel">
                    <div className="panel__header">
                        <div className="header__title">Panel logowania</div>
                    </div>
                    <form
                        className="panel__form"
                        onSubmit={formik.handleSubmit}
                    >
                        <label className="form__label">
                            <div className="label__group">
                                <div className="group__title">Email</div>
                                <div className="group__error">
                                    Nazwa użytkownika nie może zawierać znaków
                                    specjalnych
                                </div>
                            </div>
                            <input
                                className="form__input"
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                            />
                        </label>
                        <label className="form__label">
                            <div className="label__group">
                                <div className="group__title">Hasło</div>
                                <div className="group__error">
                                    Hasło musi zawierać co najmniej 6 znaków
                                </div>
                            </div>
                            <input
                                className="form__input form__input--error"
                                type="password"
                                name="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                        </label>
                        <div className="form__group">
                            <input
                                className="form__input-btn form__input-btn--secondary"
                                type="reset"
                                value="Wyczyść"
                            />
                            <button
                                type="submit"
                                className="form__input-btn form__input-btn--primary"
                            >
                                Zaloguj
                            </button>
                        </div>
                    </form>
                    <div className="panel__footer">
                        <div className="footer__element">
                            Nie możesz się zalogować?
                            <span className="element__highlight">
                                {" "}
                                Zresetuj hasło
                            </span>
                        </div>
                        <div className="footer__element">
                            Nie masz konta?
                            <span className="element__highlight">
                                {" "}
                                Założ konto
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
