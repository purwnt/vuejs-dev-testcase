import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        layout: "AppLayoutDefault",
      },
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/SearchResult.vue"),
      meta: {
        layout: "AppLayoutMain",
      },
    },
  ],
});

export default router;
