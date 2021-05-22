import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/hello",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/hello",
    name: "HelloWorld",
    component: () => import("../pages/HelloWorld.vue"),
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
