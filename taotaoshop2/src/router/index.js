import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/category",
      name: "category",
      component: () => import("@/views/Category/Category.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("@/views/Cart/Cart.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: () => import("@/views/User/User.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/Login.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("@/views/Search/Search.vue"),
    },
    {
        path: "/details",
        name: "details",
        component: () => import("@/views/Details/Details.vue"),
      },
      {
        path: "/payment",
        name: "payment",
        component: () => import("@/views/Payment/Payment.vue"),
      },
     
  ],
});

export default router;
