import React, {useState} from 'react';
import Api from '../../common/services/Api';
import "./Login.css";
import {useNavigate} from "react-router-dom";

interface Props {
}

const Login: React.FC<Props> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        Api.post('/login', {email, password}).then(response => {
            sig
            localStorage.setItem('token',response.data.token)
            navigate('/')
        }).then(e => {
            console.log(e)
        })
    };
    return (
        <>
            <main className="main">
                <div className="main__panel">
                    <div className="panel__header">
                        <div className="header__title">Panel logowania</div>
                    </div>
                    <form
                        className="panel__form"
                        onSubmit={handleSubmit}
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
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
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
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
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
};

export default Login;
