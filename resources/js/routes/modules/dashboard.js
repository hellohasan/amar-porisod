import i18n from "../../helpers/i18n";
const prefix = "/backend";
export default [
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(
        /*webpackChunkName: "dashboard/dashboard"*/ "../../components/Dashboard/Dashboard"
      ),
    meta: {
      title: i18n.tc("Dashboard"),
      requireAuth: true,
    },
  },
  {
    path: "/search-beneficiary",
    name: "search-beneficiary",
    component: () =>
      import(
        /*webpackChunkName: "dashboard/search-beneficiary"*/ "../../components/Apps/SearchBeneficiary"
      ),
    meta: {
      title: i18n.tc("SearchBeneficiary"),
      requireAuth: true,
      permissions: ["search-beneficiary"],
    },
  },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(
        /*webpackChunkName: "dashboard/users"*/ "../../components/Dashboard/Users"
      ),
    meta: {
      title: i18n.tc("ManageUsers"),
      requireAuth: true,
      roles: ["Super Admin", "Admin"],
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(
        /*webpackChunkName: "dashboard/profile"*/ "../../components/Dashboard/Profile"
      ),
    meta: {
      title: i18n.tc("Profile"),
      requireAuth: true,
    },
  },
  {
    path: "/roles",
    component: require("../../components/Settings/Roles").default,
    name: "roles",
    meta: {
      title: i18n.tc("ManageRoles"),
      requireAuth: true,
      roles: ["Super Admin"],
    },
  },
  {
    path: "/permission",
    component: require("../../components/Settings/Permission").default,
    name: "permission",
    meta: {
      title: i18n.tc("ManagePermissions"),
      requireAuth: true,
      roles: ["Super Admin"],
    },
  },
];
