"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dashboard/profile"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  data: function data() {
    return {
      form: new Form({
        name: '',
        email: '',
        phone: '',
        photo: ''
      }),
      pForm: new Form({
        current_password: '',
        password: '',
        password_confirmation: ''
      })
    };
  },
  methods: {
    updateProfile: function updateProfile() {
      var _this = this;

      this.form.post('/api/update-profile').then(function (res) {
        _this.form.photo = '';

        _this.$store.dispatch('user/refreshCurrentUser', res.data);

        _this.$refs.imageUpload.previewClear();

        Toast.fire({
          icon: 'success',
          title: 'Profile successfully Updated.'
        });
      });
    },
    updatePassword: function updatePassword() {
      var _this2 = this;

      this.pForm.post('/api/update-password').then(function () {
        _this2.pForm.reset();

        Toast.fire({
          icon: 'success',
          title: 'Password successfully Updated.'
        });
      })["catch"](function (error) {
        if (error.response.status === 400) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          });
        }
      });
    },
    fillProfileForm: function fillProfileForm() {
      this.form.fill({
        name: this.userDetails.name,
        email: this.userDetails.email,
        phone: this.userDetails.phone
      });
    }
  },
  computed: {
    userDetails: function userDetails() {
      return this.$store.getters['user/getUser'];
    },
    roles: function roles() {
      return this.$store.getters['user/getRoles'];
    }
  },
  created: function created() {
    this.fillProfileForm();
  }
});

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_255f0b33_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=255f0b33&scoped=true& */ "./resources/js/components/Dashboard/Profile.vue?vue&type=template&id=255f0b33&scoped=true&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_255f0b33_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_255f0b33_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "255f0b33",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/Profile.vue?vue&type=template&id=255f0b33&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/Profile.vue?vue&type=template&id=255f0b33&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_255f0b33_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_255f0b33_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_255f0b33_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=255f0b33&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile.vue?vue&type=template&id=255f0b33&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile.vue?vue&type=template&id=255f0b33&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Dashboard/Profile.vue?vue&type=template&id=255f0b33&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c("div", { staticClass: "card-body box-profile" }, [
          _c("div", { staticClass: "text-center" }, [
            _c("img", {
              staticClass: "profile-user-img img-fluid img-circle",
              attrs: {
                src: _vm.userDetails.photo,
                alt: "User profile picture",
              },
            }),
          ]),
          _vm._v(" "),
          _c("h3", { staticClass: "profile-username text-center" }, [
            _vm._v(_vm._s(_vm.userDetails.name)),
          ]),
          _vm._v(" "),
          _vm.roles.length
            ? _c("p", { staticClass: "text-muted text-center" }, [
                _vm._v(
                  " " +
                    _vm._s(
                      _vm._f("upperText")(_vm._f("removeDash")(_vm.roles[0]))
                    )
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("ul", { staticClass: "list-group list-group-unbordered mb-3" }, [
            _c("li", { staticClass: "list-group-item" }, [
              _c("b", [_vm._v(_vm._s(_vm.$t("name")) + ":")]),
              _vm._v(" "),
              _c("a", { staticClass: "float-right" }, [
                _vm._v(_vm._s(_vm.userDetails.name)),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("b", [_vm._v(_vm._s(_vm.$t("email")) + ":")]),
              _vm._v(" "),
              _c("a", { staticClass: "float-right" }, [
                _vm._v(_vm._s(_vm.userDetails.email)),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("b", [_vm._v(_vm._s(_vm.$t("Phone")) + ":")]),
              _vm._v(" "),
              _c("a", { staticClass: "float-right" }, [
                _vm._v(_vm._s(_vm.userDetails.phone)),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("b", [_vm._v(_vm._s(_vm.$t("Role")) + ":")]),
              _vm._v(" "),
              _c("a", { staticClass: "float-right" }, [
                _vm._v(_vm._s(_vm.roles.length ? _vm.roles[0] : "N/A")),
              ]),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "list-group-item" }, [
              _c("b", [_vm._v(_vm._s(_vm.$t("RegisterAt")) + ":")]),
              _vm._v(" "),
              _c("a", { staticClass: "float-right" }, [
                _vm._v(_vm._s(_vm._f("date")(_vm.userDetails.created_at))),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-9" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c("div", { staticClass: "card-header p-2" }, [
          _c("ul", { staticClass: "nav nav-pills nav-justified" }, [
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link active",
                  attrs: { href: "#profile", "data-toggle": "tab" },
                },
                [_vm._v(_vm._s(_vm.$t("UpdateProfile")))]
              ),
            ]),
            _vm._v(" "),
            _c("li", { staticClass: "nav-item" }, [
              _c(
                "a",
                {
                  staticClass: "nav-link",
                  attrs: { href: "#password", "data-toggle": "tab" },
                },
                [_vm._v(_vm._s(_vm.$t("UpdatePassword")))]
              ),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "tab-content" }, [
            _c(
              "div",
              { staticClass: "tab-pane active", attrs: { id: "profile" } },
              [
                _c(
                  "form",
                  {
                    staticClass: "form-horizontal",
                    attrs: { enctype: "multipart" },
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.updateProfile.apply(null, arguments)
                      },
                      keydown: function ($event) {
                        return _vm.form.onKeydown($event)
                      },
                    },
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "form-row" },
                      [
                        _c("form-group-input", {
                          attrs: {
                            form: _vm.form,
                            col: "col-12",
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
                            type: "email",
                            form: _vm.form,
                            col: "col-12",
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
                        _c("form-group-input", {
                          attrs: {
                            type: "text",
                            form: _vm.form,
                            col: "col-12",
                            name: "phone",
                            label: _vm.$t("Phone"),
                          },
                          model: {
                            value: _vm.form.phone,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "phone", $$v)
                            },
                            expression: "form.phone",
                          },
                        }),
                        _vm._v(" "),
                        _c("form-group-image", {
                          ref: "imageUpload",
                          attrs: {
                            form: _vm.form,
                            size: "200",
                            col: "col-12",
                            name: "photo",
                            label: _vm.$t("Image"),
                          },
                          model: {
                            value: _vm.form.photo,
                            callback: function ($$v) {
                              _vm.$set(_vm.form, "photo", $$v)
                            },
                            expression: "form.photo",
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-button",
                      { attrs: { type: "success", loading: _vm.form.busy } },
                      [_vm._v(_vm._s(_vm.$t("Update")))]
                    ),
                  ],
                  1
                ),
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "tab-pane", attrs: { id: "password" } }, [
              _c(
                "form",
                {
                  staticClass: "form-horizontal",
                  on: {
                    submit: function ($event) {
                      $event.preventDefault()
                      return _vm.updatePassword.apply(null, arguments)
                    },
                    keydown: function ($event) {
                      return _vm.form.onKeydown($event)
                    },
                  },
                },
                [
                  _c(
                    "div",
                    { staticClass: "form-row" },
                    [
                      _c("form-group-input", {
                        attrs: {
                          type: "password",
                          form: _vm.pForm,
                          col: "col-12",
                          name: "current_password",
                          label: _vm.$t("CurrentPassword"),
                        },
                        model: {
                          value: _vm.pForm.current_password,
                          callback: function ($$v) {
                            _vm.$set(_vm.pForm, "current_password", $$v)
                          },
                          expression: "pForm.current_password",
                        },
                      }),
                      _vm._v(" "),
                      _c("form-group-input", {
                        attrs: {
                          type: "password",
                          form: _vm.pForm,
                          col: "col-12",
                          name: "password",
                          label: _vm.$t("NewPassword"),
                        },
                        model: {
                          value: _vm.pForm.password,
                          callback: function ($$v) {
                            _vm.$set(_vm.pForm, "password", $$v)
                          },
                          expression: "pForm.password",
                        },
                      }),
                      _vm._v(" "),
                      _c("form-group-input", {
                        attrs: {
                          type: "password",
                          form: _vm.pForm,
                          col: "col-12",
                          name: "password_confirmation",
                          label: _vm.$t("ConfirmPassword"),
                        },
                        model: {
                          value: _vm.pForm.password_confirmation,
                          callback: function ($$v) {
                            _vm.$set(_vm.pForm, "password_confirmation", $$v)
                          },
                          expression: "pForm.password_confirmation",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-button",
                    { attrs: { type: "success", loading: _vm.pForm.busy } },
                    [_vm._v(_vm._s(_vm.$t("Update")))]
                  ),
                ],
                1
              ),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);