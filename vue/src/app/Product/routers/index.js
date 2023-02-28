import AddProductPage from "../pages/AddProductPage.vue";
import MainProductListPage from "../pages/MainProductListPage.vue";
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
                component: AddProductPage,
            },
            {
                path: "/lista-produktow",
                name: "MainProductList",
                meta: { requiresAuth: true },
                component: MainProductListPage,
            },
        ],
    },
];
export default routes;
