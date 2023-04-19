import DefaultLayout from "../../common/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/dodaj-produkt",
                name: "AddProduct",
                meta: { requiresAuth: true },
                component: () => import("../pages/AddProductPage.vue"),
            },
            {
                path: "/lista-produktow",
                name: "MainProductList",
                meta: { requiresAuth: true },
                component: () => import("../pages/MainProductListPage.vue"),
            },
        ],
    },
];
export default routes;
