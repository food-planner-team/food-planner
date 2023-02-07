import Joi from "joi";
import validateData from "../../common/utils/validateData.js";
import Api from "../../common/services/Api.js";
import _get from "lodash/get";
import store from "../../../plugins/store/index.js";

const schema = Joi.object({
    id: Joi.number().required(),
    email: Joi.string().required(),
});

class User {
    constructor(data) {
        validateData(schema, data);
        this.id = data.id;
        this.email = data.email;
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
                sessionStorage.setItem("TOKEN", token);
                store.commit("Notification/notify", {
                    message: "Zalogowano",
                    type: "success",
                });
            })
            .catch((error) => {
                throw error;
            });
    }

    static async register(user) {
        return await Api.post("/register", user)
            .then((response) => {
                const token = _get(response, "data.token");
                sessionStorage.setItem("TOKEN", token);
                store.commit("Notification/notify", {
                    message: "Zarejestrowano",
                    type: "success",
                });
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
            return response;
        });
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
}

export default User;
