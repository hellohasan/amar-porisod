import i18n from "../../helpers/i18n";
export default [
  {
    path: "/wards",
    component: require("../../components/Apps/Ward.vue").default,
    name: "wards",
    meta: {
      requireAuth: true,
      title: i18n.tc("WardList"),
      permissions: ["wards"],
    },
  },
];
