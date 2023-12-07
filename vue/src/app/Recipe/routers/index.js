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
            {
                path: "/przepisy",
                name: "RecipeList",
                meta: { requiresAuth: true },
                component: () => import("../pages/RecipeListPage.vue"),
            },
            {
                path: "/moje-przepisy",
                name: "MyRecipeList",
                meta: { requiresAuth: true },
                component: () => import("../pages/MyRecipeListPage.vue"),
            },
            {
                path: "/przepis/:id",
                name: "RecipeDetails",
                meta: { requiresAuth: true },
                component: () => import("../pages/RecipeDetailsPage.vue"),
            },
        ],
    },
];
export default routes;
