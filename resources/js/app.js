import Vue from "vue";

require("./bootstrap");
require("./components/Global");
require("./filters");
require("./utils");

import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

import Meta from "vue-meta";
Vue.use(Meta);

import directives from "./directives";
Vue.use(directives);

import Chartkick from "vue-chartkick";
import Chart from "chart.js";
Vue.use(Chartkick.use(Chart));

import { Fragment } from "vue-frag";
Vue.component("Fragment", Fragment);

import "./mixins/globals";

import VueElementLoading from "vue-element-loading";
Vue.component("VueElementLoading", VueElementLoading);

import store from "./stores";
import i18n from "./helpers/i18n";

import MainApp from "./components/Layouts/MainApp";
import { routes } from "./routes/index";

import VueHtmlToPaper from "vue-html-to-paper";
import paperOption from "./helpers/html-to-paper";
Vue.use(VueHtmlToPaper, paperOption);

import VueMask from "v-mask";
Vue.use(VueMask);

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

import { initialize } from "./helpers/general";
initialize(store, router);

/* import { sync } from "vuex-router-sync";
sync(store, router); */
/* Main Vue App Run Here */
const app = new Vue({
  el: "#app",
  i18n,
  router,
  store,
  components: {
    MainApp,
    Fragment,
  },
});
