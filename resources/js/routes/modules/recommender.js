import i18n from "../../helpers/i18n";
export default [
  {
    path: "/recommenders",
    component: require("../../components/Apps/Recommender.vue").default,
    name: "recommenders",
    meta: {
      requireAuth: true,
      title: i18n.tc("Recommender"),
      permissions: ["recommenders"],
    },
  },
];
