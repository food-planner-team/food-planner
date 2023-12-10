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
                component: () => import("../pages/AddRecipe.vue"),
            },
            {
                path: "/przepisy",
                name: "Recipes",
                meta: { requiresAuth: true },
                component: () => import("../pages/Recipes.vue"),
            },
            {
                path: "/moje-przepisy",
                name: "MyRecipes",
                meta: { requiresAuth: true },
                component: () => import("../pages/MyRecipes.vue"),
            },
            {
                path: "/przepis/:id",
                name: "RecipeDetails",
                meta: { requiresAuth: true },
                component: () => import("../pages/RecipeDetails.vue"),
            },
        ],
    },
];
export default routes;
