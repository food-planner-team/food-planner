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
                path: "/resetowanie-hasla",
                name: "ForgotPassword",
                meta: { requiresAuth: false },
                component: () => import("../pages/ForgotPasswordPage.vue"),
            },
            {
                path: "/resetowanie-hasla/:token",
                name: "ResetPassword",
                meta: { requiresAuth: false },
                component: () => import("../pages/ResetPasswordPage.vue"),
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
