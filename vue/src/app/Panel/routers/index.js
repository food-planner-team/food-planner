import DefaultLayout from "../../common/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/panel",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/panel/przepisy",
                name: "ManageRecipes",
                meta: { requiresAuth: true, employeeRole: true },
                component: () => import("../pages/ManageRecipes.vue"),
            },
            {
                path: "/panel/produkty",
                name: "ManageProducts",
                meta: { requiresAuth: true, employeeRole: true },
                component: () => import("../pages/ManageProducts.vue"),
            },
            {
                path: "/panel/moje-konto",
                name: "MyAccount",
                meta: { requiresAuth: true },
                component: () => import("../pages/MyAccount.vue"),
            },
        ],
    },
];
export default routes;
