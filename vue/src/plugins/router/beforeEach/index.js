import User from "../../../app/System/models/User.js";
import store from "../../store/index.js";
import _get from "lodash/get";

const userIsAvailable = async (isAuthenticationRequired) => {
    if (isAuthenticationRequired) {
        const userAvailable = _get(store, "state.User.user.data");
        if (!userAvailable) {
            return false;
        }
    }
    return true;
};

export default async (to, from, next) => {
    await User.fetchCurrent();

    if (!to.matched.length) {
        return next("/404");
    }

    const userCheckSuccessful = await userIsAvailable(to.meta.requiresAuth);

    if (!userCheckSuccessful) {
        return next("/login");
    }

    return next();
};
