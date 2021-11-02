import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Discount from "../views/Discount.vue";
import DiscountApplicationLimit from "@/views/DiscountApplicationLimit.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/discount",
    name: "Discount",
    component: Discount,
  },
  {
    path: "/discount-application-limit",
    name: "DiscountApplicationLimit",
    component: DiscountApplicationLimit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
