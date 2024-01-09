import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import _get from "lodash/get";
import convertToArrayOfModels from "../../common/utils/convertToArrayOfModels.js";
import store from "../../../plugins/store/index.js";
import Image from "../../System/models/Image.js";

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
        this.createdAt = data.created_at;
        this.kcalLimit = data.kcal_limit;

        const image = _get(data, "image.data");
        if (image) {
            this.image = new Image(image);
        }
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
        const paramsData = {
            include: "image",
        };

        const response = await Api.get("/user", { params: paramsData });

        return new User(response.data);
    }

    static async getUserById(id) {
        const paramsData = {
            include: "image",
        };

        const response = await Api.get(`/users/${id}`, { params: paramsData });

        return new User(response.data.data);
    }

    static async updateUser(userId, data) {
        const response = await Api.post(`/users/${userId}`, data, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        return new User(response.data.data);
    }

    static async getUsers(params) {
        const paramsData = {
            include: "image",
            ...params,
        };

        const response = await Api.get("/users", {
            params: paramsData,
        });

        return {
            users: convertToArrayOfModels(User, response.data.data),
            meta: response.data.meta,
        };
    }

    static async removeUser(userId) {
        const response = await Api.delete(`/users/${userId}`);

        return response;
    }

    static async updateUserRole(userId, role) {
        const response = await Api.post(`/users/${userId}/roles`, {
            role,
        });

        return new User(response.data.data);
    }
}

export default User;

export const UserRoleEnum = {
    USER: 0,
    EMPLOYEE: 1,
    ADMIN: 2,
    ALL: 3,
};
