import HomePage from "../pages/HomePage.vue";
import LoginPage from "../pages/LoginPage.vue";
import NotFound from "../pages/NotFound.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    meta: { requiresAuth: true },
    component: HomePage
  },
  {
    path: "/login",
    name: "Login",
    meta: { requiresAuth: false },
    component: LoginPage
  },
  {
    path: "/404",
    name: "404",
    meta: { requiresAuth: false },
    component: NotFound
  }
]

export default  routes
