"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dashboard/users"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Users.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Users.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Users",
  data: function data() {
    return {
      form: new Form({
        name: '',
        email: '',
        password: '',
        role: ''
      }),
      editMode: false,
      editId: null
    };
  },
  methods: _objectSpread({
    openUserModal: function openUserModal() {
      this.form.reset();
      this.form.clear();
      this.editMode = false;
      this.editId = null;
      $('#userModal').modal('show');
    },
    createUser: function createUser() {
      var _this = this;

      this.form.post('/api/user-store').then(function () {
        _this.loadUsers();

        $('#userModal').modal('hide');
        Toast.fire({
          icon: 'success',
          title: _this.$t('success_message')
        });
      });
    },
    editUser: function editUser(user) {
      this.openUserModal();
      this.editMode = true;
      this.editId = user.id;
      this.form.fill(user);
      this.form.role = user.roles.length ? user.roles[0].id : '';
    },
    updateUser: function updateUser() {
      var _this2 = this;

      this.form.put('/api/user-update/' + this.editId).then(function () {
        _this2.loadUsers();

        $('#userModal').modal('hide');
        Toast.fire({
          icon: 'success',
          title: _this2.$t('success_message')
        });
      });
    },
    deleteUser: function deleteUser(id) {
      var _this3 = this;

      Swal.fire({
        title: this.$t('confirm_title'),
        text: this.$t('confirm_message'),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.$t('confirm'),
        cancelButtonText: this.$t('cancel')
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]('/api/user-delete/' + id).then(function () {
            _this3.loadUsers();

            Swal.fire({
              title: _this3.$t('delete_title'),
              text: _this3.$t('delete_message'),
              icon: 'success'
            });
          })["catch"](function () {
            Swal.fire({
              icon: 'error',
              title: _this3.$t('error_alert_title'),
              text: _this3.$t('error_alert_text')
            });
          });
        }
      });
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    loadUsers: 'dashboard/userAction',
    loadRoles: 'dashboard/roleAction'
  })),
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    users: 'dashboard/getUsers',
    roleList: 'dashboard/getRoles'
  })),
  created: function created() {
    this.loadUsers();
    this.loadRoles();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Users.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Dashboard/Users.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_124ffc92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=124ffc92&scoped=true& */ "./resources/js/components/Dashboard/Users.vue?vue&type=template&id=124ffc92&scoped=true&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Users_vue_vue_type_template_id_124ffc92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_124ffc92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "124ffc92",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Users.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Users.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Users.vue?vue&type=template&id=124ffc92&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Users.vue?vue&type=template&id=124ffc92&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_124ffc92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_124ffc92_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_124ffc92_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=124ffc92&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Users.vue?vue&type=template&id=124ffc92&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Users.vue?vue&type=template&id=124ffc92&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Users.vue?vue&type=template&id=124ffc92&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-12" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _c("h3", { staticClass: "card-title text-bold" }, [
            _vm._v(_vm._s(_vm.$t("Manage User"))),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-tools" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                on: { click: _vm.openUserModal },
              },
              [
                _c("i", { staticClass: "fas fa-user-plus fa-w" }),
                _vm._v(
                  "\n\t\t\t\t\t\t" + _vm._s(_vm.$t("Add")) + "\n\t\t\t\t\t"
                ),
              ]
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body table-responsive p-0" }, [
          _c("table", { staticClass: "table table-hover table-bordered" }, [
            _c("thead", [
              _c("tr", [
                _c("th", [_vm._v(_vm._s(_vm.$t("SL")))]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(_vm.$t("Name")))]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(_vm.$t("Email")))]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(_vm.$t("Role")))]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(_vm.$t("RegisterAt")))]),
                _vm._v(" "),
                _c("th", [_vm._v(_vm._s(_vm.$t("Action")))]),
              ]),
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.users, function (user, index) {
                return _c("tr", { key: user.id }, [
                  _c("td", [_vm._v(_vm._s(++index))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.name))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(user.email))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      user.roles.length
                        ? _vm._l(user.roles, function (role) {
                            return _c(
                              "span",
                              {
                                key: role.id,
                                staticClass: "badge badge-success",
                              },
                              [_vm._v(_vm._s(_vm._f("capitalize")(role.name)))]
                            )
                          })
                        : _vm._e(),
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm._f("myDate")(user.created_at)))]),
                  _vm._v(" "),
                  _c("td", [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary btn-sm",
                        on: {
                          click: function ($event) {
                            return _vm.editUser(user)
                          },
                        },
                      },
                      [_c("i", { staticClass: "far fa-edit" })]
                    ),
                    _vm._v(" "),
                    user.id != 1
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            on: {
                              click: function ($event) {
                                return _vm.deleteUser(user.id)
                              },
                            },
                          },
                          [_c("i", { staticClass: "fas fa-trash" })]
                        )
                      : _vm._e(),
                  ]),
                ])
              }),
              0
            ),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "userModal",
          tabindex: "-1",
          "aria-labelledby": "userModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c("div", { staticClass: "modal-dialog modal-dialog-centered" }, [
          _c("div", { staticClass: "modal-content" }, [
            _c("div", { staticClass: "modal-header" }, [
              _c(
                "h5",
                { staticClass: "modal-title", attrs: { id: "userModalLabel" } },
                [
                  _vm._v(
                    _vm._s(
                      _vm.editMode ? _vm.$t("Update") : _vm.$t("Add New")
                    ) +
                      " " +
                      _vm._s(_vm.$t("User"))
                  ),
                ]
              ),
              _vm._v(" "),
              _vm._m(0),
            ]),
            _vm._v(" "),
            _c(
              "form",
              {
                on: {
                  submit: function ($event) {
                    $event.preventDefault()
                    _vm.editMode ? _vm.updateUser() : _vm.createUser()
                  },
                  keydown: function ($event) {
                    return _vm.form.onKeydown($event)
                  },
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "modal-body" },
                  [
                    _c("form-group-input", {
                      attrs: {
                        form: _vm.form,
                        name: "name",
                        label: _vm.$t("Name"),
                      },
                      model: {
                        value: _vm.form.name,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name",
                      },
                    }),
                    _vm._v(" "),
                    _c("form-group-input", {
                      attrs: {
                        form: _vm.form,
                        name: "email",
                        label: _vm.$t("Email"),
                      },
                      model: {
                        value: _vm.form.email,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "email", $$v)
                        },
                        expression: "form.email",
                      },
                    }),
                    _vm._v(" "),
                    _c("form-group-select", {
                      attrs: {
                        options: _vm.roleList,
                        label: _vm.$t("SelectRoles"),
                        name: "role",
                        form: _vm.form,
                      },
                      model: {
                        value: _vm.form.role,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "role", $$v)
                        },
                        expression: "form.role",
                      },
                    }),
                    _vm._v(" "),
                    _c("form-group-input", {
                      attrs: {
                        type: "password",
                        form: _vm.form,
                        name: "password",
                        label: _vm.$t("password"),
                      },
                      model: {
                        value: _vm.form.password,
                        callback: function ($$v) {
                          _vm.$set(_vm.form, "password", $$v)
                        },
                        expression: "form.password",
                      },
                    }),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "modal-footer" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-secondary",
                      attrs: { type: "button", "data-dismiss": "modal" },
                    },
                    [_vm._v(_vm._s(_vm.$t("Close")) + "\n\t\t\t\t\t\t")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { disabled: _vm.form.busy, type: "submit" },
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t" +
                          _vm._s(
                            _vm.editMode ? _vm.$t("Update") : _vm.$t("Create")
                          ) +
                          "\n\t\t\t\t\t\t"
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "close",
        attrs: {
          type: "button",
          "data-dismiss": "modal",
          "aria-label": "Close",
        },
      },
      [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
    )
  },
]
render._withStripped = true



/***/ })

}]);