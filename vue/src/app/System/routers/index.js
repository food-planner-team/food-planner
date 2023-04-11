import UnauthorizedLayout from "../../common/layouts/UnauthorizedLayout.vue";

const routes = [
    {
        path: "/",
        meta: { requiresAuth: false },
        component: UnauthorizedLayout,
        children: [
            {
                path: "/logowanie",
                name: "Login",
                meta: { requiresAuth: false },
                component: () => import("../pages/LoginPage.vue"),
            },
            {
                path: "/rejestrowanie",
                name: "Register",
                meta: { requiresAuth: false },
                component: () => import("../pages/RegisterPage.vue"),
            },
            {
                path: "/404",
                name: "404",
                meta: { requiresAuth: false },
                component: () => import("../pages/NotFound.vue"),
            },
        ],
    },
];
export default routes;
