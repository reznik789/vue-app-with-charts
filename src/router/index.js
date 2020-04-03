import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LineChartPage from "../views/LineChartPage.vue";
import BarChartPage from "../views/BarChartPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/chart",
    name: "ChartPage",
    component: LineChartPage
  },
  {
    path: "/bar-chart",
    name: "BarChartPage",
    component: BarChartPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
