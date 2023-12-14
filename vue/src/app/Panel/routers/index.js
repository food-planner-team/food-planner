import DefaultLayout from "../../common/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/panel/przepisy",
                name: "ManageRecipes",
                meta: { requiresAuth: true },
                component: () => import("../pages/ManageRecipes.vue"),
            },
        ],
    },
];
export default routes;
