(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page-auth-register2~e9bd91c9"],{a49d:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"username"}},[t._v("Your username")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.username,expression:"vdata.username"}],staticClass:"form-control form-control-sm",attrs:{type:"text",id:"username",name:"username",placeholder:"username"},domProps:{value:t.vdata.username},on:{input:function(a){a.target.composing||t.$set(t.vdata,"username",a.target.value)}}})]),e("div",{staticClass:"sm-form "},[e("label",{attrs:{for:"password"}},[t._v("Your password")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.vdata.password,expression:"vdata.password"}],staticClass:"form-control form-control-sm",attrs:{type:"password",id:"password",name:"password",placeholder:"password"},domProps:{value:t.vdata.password},on:{input:function(a){a.target.composing||t.$set(t.vdata,"password",a.target.value)}}})]),e("button",{staticClass:"btn btn-sm btn-primary  ",attrs:{type:"button"},on:{click:t.register}},[t._v("register")])])},r=[],o=e("4b97"),n=new o["a"],d={data:function(){return{vdata:{}}},methods:{register:function(){n.collection("tbuser").register(this.vdata).then((function(t){console.log(t)}))}}},i=d,l=e("2877"),u=Object(l["a"])(i,s,r,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=page-auth-register2~e9bd91c9.5f72f949.js.map