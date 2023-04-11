import DefaultLayout from "../../common/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/dodaj-przepis",
                name: "AddRecipe",
                meta: { requiresAuth: true },
                component: () => import("../pages/AddRecipePage.vue"),
            },
        ],
    },
];
export default routes;
