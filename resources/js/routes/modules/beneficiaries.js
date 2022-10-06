import i18n from "../../helpers/i18n";
export default [
  {
    path: "/beneficiaries",
    component: require("../../components/Apps/Beneficiary.vue").default,
    name: "beneficiaries",
    meta: {
      requireAuth: true,
      title: i18n.tc("Beneficiary"),
      permissions: ["beneficiaries"],
    },
  },
];
