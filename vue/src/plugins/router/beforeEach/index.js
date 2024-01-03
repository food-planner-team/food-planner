import User, {UserRoleEnum} from "../../../app/System/models/User.js";
import store from "../../store/index.js";
import _get from "lodash/get";

const userRole = () => _get(store, "state.User.user.data.role");
const userIsAvailable = () => !!_get(store, "state.User.user.data");

export default async (to, from, next) => {
    await User.fetchCurrent();
    console.log(_get(store, "state.User.user.data.role"));
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
    if (to.meta.employeeRole && !(userRole() === UserRoleEnum.ADMIN || userRole() === UserRoleEnum.EMPLOYEE)){
        return next("/");
    }
    if (to.meta.adminRole && userRole() !== UserRoleEnum.ADMIN) {
        return next("/");
    }
    return next();
};
