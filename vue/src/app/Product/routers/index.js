import AddProductPage from "../pages/AddProductPage.vue";
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
        ],
    },
];
export default routes;
