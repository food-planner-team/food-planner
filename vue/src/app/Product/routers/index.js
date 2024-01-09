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
                name: "ProductListPage",
                meta: { requiresAuth: true },
                component: () => import("../pages/ProductListPage.vue"),
            },
            {
                path: "/moje-produkty",
                name: "MyProductListPage",
                meta: { requiresAuth: true },
                component: () => import("../pages/MyProductListPage.vue"),
            },
        ],
    },
];
export default routes;
