export default [
  {
    path: "/login",
    component: require("../../components/Auth/Login").default,
    name: "login",
    meta: {
      title: "Login",
    },
  },
  /* {
    path: "/register",
    component: require("../../components/Auth/Register").default,
    name: "register",
    meta: {
      title: "Register",
    },
  }, */
  {
    path: "/forget-password",
    component: require("../../components/Auth/Forget").default,
    name: "forget-password",
    meta: {
      title: "Forget Password",
    },
  },
  {
    path: "/reset-password/:token",
    component: require("../../components/Auth/Reset").default,
    name: "reset-password",
    meta: {
      requireAuth: false,
      title: "Reset Password",
    },
  },
];
