import PlannerPage from "../pages/PlannerPage.vue";
import AddProductPage from "../pages/AddProductPage.vue";
import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import NotFound from "../pages/NotFound.vue";
import UnauthorizedLayout from "../../common/layouts/UnauthorizedLayout.vue";
import DefaultLayout from "../../common/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        name: "DefaultLayout",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "Planner",
                meta: { requiresAuth: true },
                component: PlannerPage,
            },
            {
                path: "/dodaj-produkt",
                name: "AddProduct",
                meta: { requiresAuth: true },
                component: AddProductPage,
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
                path: "/logowanie",
                name: "Login",
                meta: { requiresAuth: false },
                component: LoginPage,
            },
            {
                path: "/rejestrowanie",
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
