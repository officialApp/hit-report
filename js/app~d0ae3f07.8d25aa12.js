(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~d0ae3f07"],{0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4795");var n=a("a026"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("router-view")],1)},c=[],r=(a("5c0b"),a("2877")),i={},s=Object(r["a"])(i,o,c,!1,null,null,null),u=s.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=a("db39"),f=a("58ca"),p=a("aecd");n["a"].use(f["a"]),n["a"].use(l["a"]);var g=Object(p["a"])((function(e){return a("a449")("./"+e+".vue")})),h=new l["a"]({mode:"hash",base:"",routes:[{path:"/",component:g,children:d["a"]}]}),m=(a("b64b"),a("4160"),a("159b"),a("a434"),a("0d03"),a("9911"),a("2f62")),v=a("8aa5"),b=a.n(v),y=a("bc3a"),k=a.n(y);n["a"].use(m["a"]);var x=function(){return new m["a"].Store({modules:{},state:{data:{listfavorites:[],menu:0},name:"",keranjang:0,mediaQ:"XL",password:"***",users:null,nossr:!1,busy:!1,isAuth:!1},mutations:{goAuth:function(e){e.auth.isAuth=!0},vuex:function(e){localStorage.setItem("vuex",JSON.stringify(e))},xeuv:function(e){for(var t in e)"user"!=t&&(e[t]=JSON.parse(localStorage.getItem("vuex"))[t])},changeUser:function(e,t){e.user=t},changeUsers:function(e,t){e.users=t},busy:function(e,t){e.busy=t},mediaQueries:function(e,t){e.mediaQ=t},nossr:function(e,t){e.nossr=t},editData:function(e,t){var a=t.index;delete t.index;var n=Object.keys(t);n.forEach((function(n){e.users[a][n]=t[n]})),console.log(e.users)},saveData:function(e,t){var a={},n=Object.keys(e.users[0]);n.forEach((function(e){a[e]=t[e]?t[e]:"null"})),e.users.push(a)},deleteData:function(e,t){e.users.splice(t,1)},refreshData:function(e,t){e.auth.user=t.users,e.auth.user.picture=t.users.picture,e.user=t.users,e.kategori=t.kategoris},logout:function(e){e.user=!1,e.users=!1,e.data={listfavorites:[]},window.location.reload()},refreshUser:function(e,t){e.user=t}},actions:{getData:function(e,t){localStorage.getItem("data-persist")&&(e.state.data=JSON.parse(localStorage.getItem("data-persist")))},updateData:function(e){localStorage.setItem("data-persist",JSON.stringify(e.state.data))},auth:function(){"false"==localStorage.getItem("auth._token.local")&&"false"==localStorage.getItem("auth.local")&&h.push("/")},notifikasi:function(e,t){console.log("datas",t),t.createdAt=new Date,t.dibaca=!1,sdb.collection("tbuser").doc().select("select id,fcm from tbuser where id='".concat(t.to.id,"'")).then((function(e){console.log("cekfcm",e);var a=e[0].fcm,n={data:{title:t.title,body:t.body,surveyID:"ewtawgreg-gragrag-rgarhthgbad",sound:!0,ledColor:[255,255,128,16],vibrationPattern:[250,1e3,250,500],link:t.link,android_channel_id:"test-channel"},to:t.to?a:"-",priority:"high",content_available:!0};console.log("data",n),t.id_user=t.to.id,n=JSON.stringify(n),t.to=t.to?t.to:"",sdb.collection("notifikasi").doc().set({title:t.title,body:t.body,link:t.link,createdAt:t.createdAt,dibaca:!1,id_user:t.id_user}).then((function(e){})),b.a.database().ref("/notif/sintal").set({id:t.id_user,tanggal:(new Date).getTime()}),k.a.post("https://onesignal.com/api/v1/notifications",{app_id:"7d2f0b7a-c95b-47ef-be05-6215a554d49c",include_player_ids:[t.to?a:"-"],contents:{en:t.body},android_channel_id:"9db143e1-f1a7-4909-86e9-26da7dd34813",headings:{en:t.title},data:{"custom-data":"data1"},chrome_web_image:"https://balangankab.go.id/icon.png"},{headers:{Authorization:"Basic NzA0NDU4ZGItMTBlMC00NTZlLWEyYTMtMTAxNjJkMjg2N2Fm","Content-Type":"application/json"}}).then((function(e){}))}))},ceklogin:function(e,t){var a=e.commit;return a("changebusy",!0),new Promise((function(e,n){b.a.auth().onAuthStateChanged((function(n){n?(console.log(n.uid),b.a.firestore().collection("users").doc(n.uid).get().then((function(n){console.log(n.data()),a("changeUsers",n.data()),localStorage.setItem("users",JSON.stringify(n.data())),t&&(1==t["true"]?a("changebusy",!1):(a("changebusy",!1),h.push(t["true"]))),e()}))):(console.log("user tidak ada"),t["false"]?(a("changebusy",!1),h.push(t["false"])):a("changebusy",!1))}))}))},logout:function(e){e.commit("changegps",!1),b.a.auth().signOut().then((function(){localStorage.setItem("expireDate",null),localStorage.setItem("auth._token.local",!1),localStorage.setItem("auth.local",!1),navigator.geolocation.clearWatch(e.state.watchgps),e.state.isAuth=!1,e.commit("logout",!1),h.push("/login")})),"dekstop"!=e.state.device&&this.$auth.logout()},refreshUser:function(e){this.$axios.get("/api/auth/user").then((function(t){console.log(t.data),e.commit("refreshUser",t.data.user)}))},userRefresh:function(e){e.commit("refreshUser",this.$auth.user)}}})},S=x,$=a("59ca"),w=a.n($),_=(a("ea7b"),a("588e"),a("66ce"),a("e71f"),a("741f"),a("000b"),a("2169")),E=a("96e4"),O=a.n(E),A=a("0a63"),j=a.n(A),I=(a("0808"),a("6944")),L=a.n(I),T=a("289d"),D=(a("5abe"),a("4a7a")),N=a.n(D),J=(a("6dfc"),a("5b6c")),P=a.n(J),q=a("c986"),U=a.n(q),z=a("f2d9"),M=a("49ab"),C=a.n(M),Q=a("b76a"),B=a.n(Q);n["a"].use(_["a"]),//! https://github.com/egoist/vue-no-ssr
n["a"].use(O.a),n["a"].use(j.a),n["a"].use(L.a),n["a"].use(T["a"]),n["a"].component("v-select",N.a),n["a"].use(P.a),n["a"].use(U.a,"vac"),n["a"].component("vueJsonExcel",z["a"]),n["a"].use(C.a),
//! =========================================
n["a"].component("draggable",B.a);//! https://github.com/jbaysolutions/vue-grid-layout
//! https://github.com/eddiemf/vue-scrollactive
a("466d"),a("ac1f");n["a"].directive("focus",{bind:function(){var e=this.el;n["a"].nextTick((function(){e.focus()}))}}),n["a"].directive("lazys",{bind:function(e){var t=e.src;e.classList.toggle("deactive",!0),e.addEventListener("load",(function a(){console.log("loaded"),console.log("nama image",e.src),e.src.match(/nofound.png/g)?console.log("error2"):(e.src=t,e.classList.toggle("deactive",!1)),e.removeEventListener("load",a)})),e.addEventListener("error",(function t(){e.src="/nofound.png",console.log("error"),console.log(e.src.match(/nofound.png/g)),e.removeEventListener("error",t)}))},update:function(e){console.log("update");var t=e.src;console.log(t),e.src=t}}),n["a"].directive("imgs",{bind:function(e,t){var a=e.src;e.src="/loading.gif",e.addEventListener("load",(function n(){if(console.log("loaded"),console.log("nama image",e.src),e.src.match(/nofound.png/g))console.log("error2");else{e.src=a;var o=[];e.classList.contains("myimagegroup")?t.context.$el.querySelectorAll(".myimagegroup img").forEach((function(e,a){e.style.cursor="pointer",e.onclick=function(){t.context.$nuxt.$emit("myimageactive",a)},o.push(e.src)})):t.context.$el.querySelectorAll(".myimage").forEach((function(e,a){e.style.cursor="pointer",e.onclick=function(){t.context.$nuxt.$emit("myimageactive",a)},o.push(e.src)})),t.context.$nuxt.$emit("myimage",o)}e.removeEventListener("load",n)})),e.addEventListener("error",(function t(){e.src="/nofound.png",console.log("error"),console.log(e.src.match(/nofound.png/g)),e.removeEventListener("error",t)}))},update:function(e){console.log("update");var t=e.src;console.log(t),e.src=t}}),n["a"].directive("reload",{bind:function(e,t,a){a.context.$route.hash&&setTimeout((function(){a.elm.querySelectorAll("a").forEach((function(e){e.hash==a.context.$route.hash&&e.click()}))}),2e3)}}),n["a"].directive("myimage",{bind:function(e,t,a){var n=[];setTimeout((function(){a.context.$el.querySelectorAll(".myimage").length>0&&a.context.$el.querySelectorAll(".myimage").forEach((function(e,t){e.style.cursor="pointer",n.push(e.src),e.addEventListener("click",(function(){a.context.$nuxt.$emit("myimageactive",t),a.context.$nuxt.$emit("myimage",n)}))}))}),2e3)}}),n["a"].directive("top",{bind:function(e){setTimeout((function(){console.log("hello"),e.context.$root.$el.querySelector("#top").click()}),0)}});a("7a82"),a("5319");var Y=a("2ef0"),Z=a.n(Y),F=a("340b"),K=a.n(F),G=a("cc98"),R=a.n(G);Object.defineProperty(n["a"].prototype,"$_",{value:Z.a}),Object.defineProperty(n["a"].prototype,"$datefns",{value:K.a}),Object.defineProperty(n["a"].prototype,"$uniqid",{value:R.a});var W=new n["a"];Object.defineProperty(n["a"].prototype,"$nuxt",{value:W});var H=function(e,t,a){return fetch(e).then((function(e){return e.arrayBuffer()})).then((function(e){return new File([e],t,{type:a})}))};Object.defineProperty(n["a"].prototype,"$urltofile",{value:H}),Object.defineProperty(n["a"].prototype,"$scramble",{value:function(e){for(var t="",a="",n=0;n<e.length;n++)t="",t=e.charAt(n),"a"==t?t=t.replace("a","x"):"b"==t?t=t.replace("b","v"):"c"==t?t=t.replace("c","u"):"d"==t?t=t.replace("d","w"):"e"==t?t=t.replace("e","y"):"f"==t?t=t.replace("f","z"):"g"==t?t=t.replace("g","t"):"h"==t?t=t.replace("h","s"):"i"==t?t=t.replace("i","r"):"j"==t?t=t.replace("j","q"):"k"==t?t=t.replace("k","p"):"l"==t?t=t.replace("l","o"):"m"==t?t=t.replace("m","n"):"z"==t?t=t.replace("z","f"):"y"==t?t=t.replace("y","e"):"x"==t?t=t.replace("x","a"):"w"==t?t=t.replace("w","d"):"v"==t?t=t.replace("v","b"):"u"==t?t=t.replace("u","c"):"t"==t?t=t.replace("t","g"):"s"==t?t=t.replace("s","h"):"r"==t?t=t.replace("r","i"):"q"==t?t=t.replace("q","j"):"p"==t?t=t.replace("p","k"):"o"==t?t=t.replace("o","l"):"n"==t?t=t.replace("n","m"):"1"==t?t=t.replace("1","0"):"2"==t?t=t.replace("2","8"):"3"==t?t=t.replace("3","9"):"4"==t?t=t.replace("4","7"):"5"==t?t=t.replace("5","6"):"0"==t?t=t.replace("0","1"):"8"==t?t=t.replace("8","2"):"9"==t?t=t.replace("9","3"):"7"==t?t=t.replace("7","4"):"6"==t?t=t.replace("6","5"):" "==t?t=t.replace(" ","_"):"_"==t?t=t.replace("_"," "):"*"==t?t=t.replace("*","/"):"/"==t?t=t.replace("/","*"):","==t?t=t.replace(",","^"):"^"==t&&(t=t.replace("^",",")),a+=t;return a}}),n["a"].config.productionTip=!1;var X={apiKey:"AIzaSyDEbhZMnzuuIJ3JYPKAdQqrYN3s0sPT2fM",authDomain:"testing-54719.firebaseapp.com",databaseURL:"https://testing-54719-default-rtdb.firebaseio.com",projectId:"testing-54719",storageBucket:"testing-54719.appspot.com",messagingSenderId:"518827785832",appId:"1:518827785832:web:54d14cac7dd8c6987645dd",measurementId:"G-QZ1EHKMCTY"};w.a.initializeApp(X),n["a"].config.productionTip=!1,new n["a"]({store:S,router:h,render:function(e){return e(u)},created:function(){var e=this;if(sessionStorage.redirect){var t=sessionStorage.redirect;delete sessionStorage.redirect,setTimeout((function(){e.$router.push(t)}),500)}}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},a449:function(e,t,a){var n={"./admin-pks.vue":["1d72","chunk-d58324a8"],"./app_admin.vue":["4a6f","chunk-793568d0","chunk-715faab6"],"./app_todo.vue":["2b7a","chunk-1304c5bc"],"./default.vue":["7b3d","chunk-af48f40c"],"./hit-mobile.vue":["7fc4","chunk-39c9063e"],"./htc-mobile.vue":["1e0e","chunk-1114e9f2"],"./x-admin-layout.vue":["98d6","chunk-793568d0","chunk-0a824858"],"./x-docs-layout.vue":["d409","chunk-68c174e8"]};function o(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(n)},o.id="a449",e.exports=o}}]);
//# sourceMappingURL=app~d0ae3f07.8d25aa12.js.map