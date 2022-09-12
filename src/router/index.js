import { createRouter, createWebHashHistory } from "vue-router";
import Login from "./../views/LoginPage";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/todo",
    name: "todo",
    component: () => import("./../views/TodoPage"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("./../views/NotFound"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
