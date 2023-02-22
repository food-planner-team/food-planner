import PlannerPage from "../pages/PlannerPage.vue";
import DefaultLayout from "../../common/layouts/DefaultLayout.vue";

const routes = [
    {
        path: "/",
        meta: { requiresAuth: true },
        component: DefaultLayout,
        children: [
            {
                path: "/",
                name: "Planner",
                meta: { requiresAuth: true },
                component: PlannerPage,
            },
        ],
    },
];
export default routes;
