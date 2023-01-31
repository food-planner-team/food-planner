import "./Login.css";

function Login() {
    return (
        <>
            <main className="main">
                <div className="main__panel">
                    <div className="panel__header">
                        <div className="header__title">Panel logowania</div>
                    </div>
                    <form className="panel__form">
                        <label className="form__label">
                            <div className="label__group">
                                <div className="group__title">Nazwa użytkownika</div>
                                <div className="group__error">
                                    Nazwa użytkownika nie może zawierać znaków specjalnych
                                </div>
                            </div>
                            <input className="form__input" type="text" />
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
                            />
                        </label>
                        <div className="form__group">
                            <input
                                className="form__input-btn form__input-btn--secondary"
                                type="reset"
                                value="Wyczyść"
                            />
                            <input
                                className="form__input-btn form__input-btn--primary"
                                type="button"
                                value="Zaloguj"
                            />
                        </div>
                    </form>
                    <div className="panel__footer">
                        <div className="footer__element">
                            Nie możesz się zalogować?
                            <span className="element__highlight"> Zresetuj hasło</span>
                        </div>
                        <div className="footer__element">
                            Nie masz konta?
                            <span className="element__highlight"> Założ konto</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
