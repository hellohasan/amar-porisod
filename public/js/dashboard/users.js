"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61],{23160:(t,e,s)=>{s.r(e),s.d(e,{default:()=>l});var a=s(20629);function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function o(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const n={name:"Users",data:function(){return{form:new Form({name:"",email:"",password:"",role:""}),editMode:!1,editId:null}},methods:o({openUserModal:function(){this.form.reset(),this.form.clear(),this.editMode=!1,this.editId=null,$("#userModal").modal("show")},createUser:function(){var t=this;this.form.post("/api/user-store").then((function(){t.loadUsers(),$("#userModal").modal("hide"),Toast.fire({icon:"success",title:t.$t("success_message")})}))},editUser:function(t){this.openUserModal(),this.editMode=!0,this.editId=t.id,this.form.fill(t),this.form.role=t.roles.length?t.roles[0].id:""},updateUser:function(){var t=this;this.form.put("/api/user-update/"+this.editId).then((function(){t.loadUsers(),$("#userModal").modal("hide"),Toast.fire({icon:"success",title:t.$t("success_message")})}))},deleteUser:function(t){var e=this;Swal.fire({title:this.$t("confirm_title"),text:this.$t("confirm_message"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:this.$t("confirm"),cancelButtonText:this.$t("cancel")}).then((function(s){s.isConfirmed&&axios.delete("/api/user-delete/"+t).then((function(){e.loadUsers(),Swal.fire({title:e.$t("delete_title"),text:e.$t("delete_message"),icon:"success"})})).catch((function(){Swal.fire({icon:"error",title:e.$t("error_alert_title"),text:e.$t("error_alert_text")})}))}))}},(0,a.nv)({loadUsers:"dashboard/userAction",loadRoles:"dashboard/roleAction"})),computed:o({},(0,a.Se)({users:"dashboard/getUsers",roleList:"dashboard/getRoles"})),created:function(){this.loadUsers(),this.loadRoles()}};const l=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h3",{staticClass:"card-title text-bold"},[t._v(t._s(t.$t("Manage User")))]),t._v(" "),s("div",{staticClass:"card-tools"},[s("button",{staticClass:"btn btn-success",on:{click:t.openUserModal}},[s("i",{staticClass:"fas fa-user-plus fa-w"}),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("Add"))+"\n\t\t\t\t\t")])])]),t._v(" "),s("div",{staticClass:"card-body table-responsive p-0"},[s("table",{staticClass:"table table-hover table-bordered"},[s("thead",[s("tr",[s("th",[t._v(t._s(t.$t("SL")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Name")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Email")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Role")))]),t._v(" "),s("th",[t._v(t._s(t.$t("RegisterAt")))]),t._v(" "),s("th",[t._v(t._s(t.$t("Action")))])])]),t._v(" "),s("tbody",t._l(t.users,(function(e,a){return s("tr",{key:e.id},[s("td",[t._v(t._s(++a))]),t._v(" "),s("td",[t._v(t._s(e.name))]),t._v(" "),s("td",[t._v(t._s(e.email))]),t._v(" "),s("td",[e.roles.length?t._l(e.roles,(function(e){return s("span",{key:e.id,staticClass:"badge badge-success"},[t._v(t._s(t._f("capitalize")(e.name)))])})):t._e()],2),t._v(" "),s("td",[t._v(t._s(t._f("myDate")(e.created_at)))]),t._v(" "),s("td",[s("button",{staticClass:"btn btn-primary btn-sm",on:{click:function(s){return t.editUser(e)}}},[s("i",{staticClass:"far fa-edit"})]),t._v(" "),1!=e.id?s("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(s){return t.deleteUser(e.id)}}},[s("i",{staticClass:"fas fa-trash"})]):t._e()])])})),0)])])])]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"userModal",tabindex:"-1","aria-labelledby":"userModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered"},[s("div",{staticClass:"modal-content"},[s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"userModalLabel"}},[t._v(t._s(t.editMode?t.$t("Update"):t.$t("Add New"))+" "+t._s(t.$t("User")))]),t._v(" "),t._m(0)]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.editMode?t.updateUser():t.createUser()},keydown:function(e){return t.form.onKeydown(e)}}},[s("div",{staticClass:"modal-body"},[s("form-group-input",{attrs:{form:t.form,name:"name",label:t.$t("Name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),s("form-group-input",{attrs:{form:t.form,name:"email",label:t.$t("Email")},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),s("form-group-select",{attrs:{options:t.roleList,label:t.$t("SelectRoles"),name:"role",form:t.form},model:{value:t.form.role,callback:function(e){t.$set(t.form,"role",e)},expression:"form.role"}}),t._v(" "),s("form-group-input",{attrs:{type:"password",form:t.form,name:"password",label:t.$t("password")},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(t._s(t.$t("Close"))+"\n\t\t\t\t\t\t")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{disabled:t.form.busy,type:"submit"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.editMode?t.$t("Update"):t.$t("Create"))+"\n\t\t\t\t\t\t")])])])])])])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],!1,null,"6aa4186f",null).exports}}]);