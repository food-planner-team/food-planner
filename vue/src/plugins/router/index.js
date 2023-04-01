import {createRouter, createWebHistory} from 'vue-router'

import register from './registerRoutes.js'
import beforeEach from "./beforeEach/index.js";

const routes = register()

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});
router.beforeEach(beforeEach)
export default router
