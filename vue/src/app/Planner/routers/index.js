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
                component: () => import("../pages/PlannerPage.vue"),
            },
        ],
    },
];
export default routes;
