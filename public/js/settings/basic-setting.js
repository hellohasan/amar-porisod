"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["settings/basic-setting"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/BasicSetting.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/BasicSetting.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "BasicSetting",
  data: function data() {
    return {
      form: new Form({
        title: '',
        name: '',
        est: '',
        phone: '',
        email: '',
        address: '',
        copy_text: ''
      })
    };
  },
  methods: _objectSpread({
    handelForm: function handelForm() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.form.post('/api/basic-setting-submit').then(function (res) {
                  _this.getBasicData();

                  Toast.fire({
                    icon: 'success',
                    title: _this.$t('success_message_create')
                  });
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    setBasicDataForm: function setBasicDataForm() {
      this.form.fill(this.$store.getters.getBasic);
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)({
    getBasicData: 'basicAction'
  })),
  created: function created() {
    this.getBasicData();
    this.setBasicDataForm();
  }
});

/***/ }),

/***/ "./resources/js/components/Settings/BasicSetting.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Settings/BasicSetting.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BasicSetting_vue_vue_type_template_id_628ae473_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicSetting.vue?vue&type=template&id=628ae473&scoped=true& */ "./resources/js/components/Settings/BasicSetting.vue?vue&type=template&id=628ae473&scoped=true&");
/* harmony import */ var _BasicSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicSetting.vue?vue&type=script&lang=js& */ "./resources/js/components/Settings/BasicSetting.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasicSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasicSetting_vue_vue_type_template_id_628ae473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BasicSetting_vue_vue_type_template_id_628ae473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "628ae473",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Settings/BasicSetting.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Settings/BasicSetting.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Settings/BasicSetting.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasicSetting.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/BasicSetting.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSetting_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Settings/BasicSetting.vue?vue&type=template&id=628ae473&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Settings/BasicSetting.vue?vue&type=template&id=628ae473&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSetting_vue_vue_type_template_id_628ae473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSetting_vue_vue_type_template_id_628ae473_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicSetting_vue_vue_type_template_id_628ae473_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BasicSetting.vue?vue&type=template&id=628ae473&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/BasicSetting.vue?vue&type=template&id=628ae473&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/BasicSetting.vue?vue&type=template&id=628ae473&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Settings/BasicSetting.vue?vue&type=template&id=628ae473&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _c("card", { attrs: { title: _vm.$t("basic_setting") } }, [
    _c(
      "form",
      {
        attrs: { role: "form", method: "post" },
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.handelForm.apply(null, arguments)
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
                col: "col-md-12",
                form: _vm.form,
                name: "title",
                label: _vm.$t("app_title"),
              },
              model: {
                value: _vm.form.title,
                callback: function ($$v) {
                  _vm.$set(_vm.form, "title", $$v)
                },
                expression: "form.title",
              },
            }),
            _vm._v(" "),
            _c("form-group-input", {
              attrs: {
                col: "col-md-6",
                form: _vm.form,
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
            _c("form-group-input", {
              attrs: {
                col: "col-md-6",
                type: "email",
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
            _c("form-group-input", {
              attrs: {
                col: "col-md-6",
                form: _vm.form,
                name: "address",
                label: _vm.$t("Address"),
              },
              model: {
                value: _vm.form.address,
                callback: function ($$v) {
                  _vm.$set(_vm.form, "address", $$v)
                },
                expression: "form.address",
              },
            }),
            _vm._v(" "),
            _c("form-group-input", {
              attrs: {
                col: "col-md-6",
                form: _vm.form,
                name: "copy_text",
                label: _vm.$t("Copy_text"),
              },
              model: {
                value: _vm.form.copy_text,
                callback: function ($$v) {
                  _vm.$set(_vm.form, "copy_text", $$v)
                },
                expression: "form.copy_text",
              },
            }),
            _vm._v(" "),
            _c(
              "form-group-button",
              { attrs: { form: _vm.form, icon: "fas fa-cog" } },
              [_vm._v(_vm._s(_vm.$t("Update")))]
            ),
          ],
          1
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);