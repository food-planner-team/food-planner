import HomePage from "../pages/HomePage.vue";
import Dashboard from "../pages/Dashboard.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import NotFound from "../pages/NotFound.vue";
import UnauthorizedLayout from "../../common/layouts/UnauthorizedLayout.vue";
import DefaultLayout from "../../common/layouts/DefaultLayout.vue";
import Test from "../components/Test.vue";

const routes = [
    {
        path: "/",
        name: "DefaultLayout",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/test",
                name: "Test",
                meta: { requiresAuth: true },
                component: Test,
            },
            {
                path: "/",
                name: "Dashboard",
                meta: { requiresAuth: true },
                component: Dashboard,
            },
        ],
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
