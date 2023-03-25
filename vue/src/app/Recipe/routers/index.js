import AddRecipePage from "../pages/AddRecipePage.vue";
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
                component: AddRecipePage,
            },
        ],
    },
];
export default routes;
