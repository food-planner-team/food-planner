import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import NotFound from "../pages/NotFound.vue";
import UnauthorizedLayout from "../../common/layouts/UnauthorizedLayout.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        meta: { requiresAuth: true },
        component: HomePage,
    },
    {
        path: "/",
        name: "UnauthorizedLayouts",
        meta: { requiresAuth: false },
        component: UnauthorizedLayout,
        children: [
            {
                path: "/login",
                name: "Login",
                meta: { requiresAuth: false },
                component: LoginPage,
            },
            {
                path: "/register",
                name: "Register",
                meta: { requiresAuth: false },
                component: RegisterPage,
            },
            {
                path: "/404",
                name: "404",
                meta: { requiresAuth: false },
                component: NotFound,
            },
        ],
    },
];
export default routes;
