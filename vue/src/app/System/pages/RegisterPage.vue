<template>
    <div class="pannel">
        <div class="panel__header">
            <div class="header__title">Panel rejestracji</div>
        </div>
        <form class="panel__form" @submit="register">
            <label class="form__label">
                <div class="label__group">
                    <div class="group__title">Login</div>
                </div>
                <input
                    class="form__input"
                    name="login"
                    type="text"
                    v-model="user.name"
                    required
                />
            </label>
            <label class="form__label">
                <div class="label__group">
                    <div class="group__title">Email</div>
                </div>
                <input
                    class="form__input"
                    id="email-address"
                    name="email"
                    type="email"
                    v-model="user.email"
                    required
                />
            </label>
            <label class="form__label">
                <div class="label__group">
                    <div class="group__title">Hasło</div>
                </div>
                <input
                    class="form__input"
                    id="password"
                    name="password"
                    type="password"
                    v-model="user.password"
                    required
                />
            </label>
            <label class="form__label">
                <div class="label__group">
                    <div class="group__title">Powtórz hasło</div>
                </div>
                <input
                    class="form__input"
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    v-model="user.password_confirmation"
                    required
                />
            </label>
            <div class="group__error" v-if="error">
                Podanne dane są nieprawidłowe
            </div>
            <div class="form__group">
                <input
                    class="form__input-btn form__input-btn--secondary"
                    type="reset"
                    value="Wyczyść"
                    @click="setError('')"
                />
                <button
                    class="form__input-btn form__input-btn--primary"
                    type="submit"
                >
                    Załóż konto
                </button>
            </div>
        </form>
        <div class="panel__footer">
            <router-link to="/logowanie" class="hover:underline">
                <div class="footer__element">
                    Masz już konto?
                    <span class="element__highlight"> Zaloguj się</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import User from "../models/User.js";
import { ref } from "vue";

const router = useRouter();
const error = ref("");

function setError(errorMessage) {
    error.value = errorMessage;
}

const user = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
};

const register = (ev) => {
    ev.preventDefault();
    User.register(user)
        .then(() => {
            router.push({ name: "Planner" });
        })
        .catch(() => {
            setError("Podane dane są nieprawidłowe!");
        });
};
</script>

<style lang="scss" scoped>
.pannel {
    box-shadow: 0px 16px 30px $box-shadow;
    border-radius: 16px;
    width: 800px;
    min-height: 500px;
    margin: 0 2rem;
    padding: 2rem;
    box-sizing: border-box;
    backdrop-filter: blur(20px);
    background-color: $alpha;
}

.panel__header {
    height: 15%;
    margin-bottom: 20px;
}

.header__title {
    font-size: 24px;
    font-weight: 700;
    position: relative;
}

.header__title::after {
    content: "";
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: $grey-light;
    top: 50%;
    margin-left: 1.5rem;
}

.panel__form {
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.label__group {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 0.65rem;
    font-size: 13px;
}

.group__title {
    flex: 1;
    color: $grey;
    font-weight: 400;
}

.group__error {
    flex: 1;
    color: $error;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    background-color: $error-bg;
    padding: 1rem;
    border-radius: 16px;
    margin-top: 10px;
}

.group__error:empty {
    display: none;
}

.form__group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;
    gap: 2rem;
}

.form__input {
    width: 100%;
    padding: 0.7rem 1rem;
    border: none;
    border-radius: 16px;
    border: 1px solid $grey-light;
}

.form__input-btn {
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
}

.form__input-btn--primary {
    background-color: $primary;
    border: 1px solid $primary;
    color: $white;
}

.form__input-btn--primary:hover {
    background-color: $primary-dark;
    border: 1px solid $primary-dark;
}

.form__input-btn--secondary {
    background-color: transparent;
    border: 1px solid $primary;
    color: $primary;
}

.form__input-btn--secondary:hover {
    background-color: $primary;
    border: 1px solid $primary;
    color: $white;
}

.panel__footer {
    margin-top: 25px;
    height: 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__element {
    font-size: 12px;
    color: $grey;
}

.element__highlight {
    font-weight: 700;
    color: $typography-dark;
    text-transform: uppercase;
}

@media screen and (max-width: 600px) {
    .main__panel {
        height: 700px;
    }

    .label__group {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .group__error {
        width: 100%;
    }

    .form__group {
        flex-direction: column;
        gap: 1rem;
    }

    .panel__footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }
}
</style>
