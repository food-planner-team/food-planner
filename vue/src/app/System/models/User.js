import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import _get from "lodash/get";
import store from "../../../plugins/store/index.js";

const schema = Joi.object({
    id: Joi.number().required(),
    email: Joi.string().required(),
    name: Joi.string().required(),
    role: Joi.number().required(),
});

class User {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.email = data.email;
        this.name = data.name;
        this.role = data.role;
    }

    static async fetchCurrent() {
        try {
            const response = await Api.get("/user");
            store.commit("User/setUser", response.data);

            return new User(response.data);
        } catch (error) {
            return null;
        }
    }

    static async login(user) {
        return await Api.post("/login", user)
            .then((response) => {
                const token = _get(response, "data.token");
                localStorage.setItem("TOKEN", token);
                store.commit("Notification/notify", {
                    message: "Zalogowano",
                    type: "success",
                });
                return response;
            })
            .catch((error) => {
                throw error;
            });
    }

    static async register(user) {
        return await Api.post("/register", user)
            .then((response) => {
                const token = _get(response, "data.token");
                localStorage.setItem("TOKEN", token);
                store.commit("Notification/notify", {
                    message: "Zarejestrowano",
                    type: "success",
                });
                return response;
            })
            .catch((error) => {
                throw error;
            });
    }

    static async logout() {
        return await Api.post("/logout").then((response) => {
            // commit("notify", {
            //     message: "Wylogowano",
            //     type: "success"
            // })
            store.commit("User/setUser", null);
            localStorage.removeItem("TOKEN");
            return response;
        });
    }

    static async sendResetLink(email) {
        const data = await Api.post("/send-reset-link", {
            email: email,
        });

        return data;
    }

    static async resetPassword(email, password, passwordConfirmation, token) {
        const data = await Api.post("/reset", {
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            token: token,
        });

        return data;
    }

    static async recipes(dateStart, dateEnd) {
        const data = await Api.get(
            `/user/recipes?dateStart=${dateStart}&dateEnd=${dateEnd}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                throw error;
            });

        return data;
    }

    static async getLoggedUser() {
        const response = await Api.get("/user");

        return new User(response.data);
    }

    static async updateUser(userId, data) {
        const response = await Api.put(`/users/${userId}`, data);

        return new User(response.data.data);
    }
}

export default User;

export const UserRoleEnum = {
    USER: 0,
    EMPLOYEE: 1,
    ADMIN: 2,
};
