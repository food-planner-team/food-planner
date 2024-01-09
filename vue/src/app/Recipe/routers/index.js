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
                path: "/edytuj-przepis/:id",
                name: "UpdateRecipe",
                meta: { requiresAuth: true },
                component: () => import("../pages/UpdateRecipe.vue"),
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
