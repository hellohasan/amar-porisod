import i18n from "../../helpers/i18n";
export default [
  {
    path: "/projects",
    component: require("../../components/Apps/Project.vue").default,
    name: "projects",
    meta: {
      requireAuth: true,
      title: i18n.tc("Projects"),
      permissions: ["projects"],
    },
  },
];
