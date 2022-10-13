import i18n from "../../helpers/i18n";
export default [
  {
    path: "/project-beneficiaries",
    component: () =>
      import(
        /*webpackChunkName: "project-beneficiaries/project-beneficiaries"*/ "../../components/Apps/ProjectBeneficiary/ProjectBeneficiary.vue"
      ),
    meta: { requireAuth: true },
    children: [
      {
        path: "/",
        component: () =>
          import(
            /* webpackChunkName:"project-beneficiaries/index" */ "../../components/Apps/ProjectBeneficiary/Index"
          ),
        meta: {
          title: i18n.tc("ProjectBeneficiary"),
          permissions: ["project-beneficiaries"],
        },
      },
      {
        path: "create",
        component: () =>
          import(
            /* webpackChunkName:"project-beneficiaries/create" */ "../../components/Apps/ProjectBeneficiary/Create"
          ),
        meta: {
          title: i18n.tc("NewProjectBeneficiary"),
          permissions: ["project-beneficiaries-create"],
        },
      },
      {
        path: "slip",
        component: () =>
          import(
            /* webpackChunkName:"project-beneficiaries/slip" */ "../../components/Apps/ProjectBeneficiary/Slip"
          ),
        meta: {
          title: i18n.tc("PrintProjectBeneficiary"),
          permissions: ["project-beneficiaries-slip"],
        },
      },
    ],
  },
];
