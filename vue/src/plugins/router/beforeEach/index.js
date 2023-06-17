import User from "../../../app/System/models/User.js";
import store from "../../store/index.js";
import _get from "lodash/get";

const userIsAdmin = () => _get(store, "state.User.user.data.admin") === 1;
const userIsAvailable = () => !!_get(store, "state.User.user.data");

export default async (to, from, next) => {
    await User.fetchCurrent();

    if (!to.matched.length) {
        return next("/404");
    }
    if (to.meta.requiresAuth && !userIsAvailable()) {
        return next("/logowanie");
    }
    if (to.name === "Login" || to.name === "Register") {
        if (userIsAvailable()) {
            return next("/");
        }
    }

    if (to.name === "AddProduct") {
        if (!userIsAdmin()) {
            return next("/");
        }
    }

    return next();
};
