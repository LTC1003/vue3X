import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MainContent from "../views/MainContent";
import Lineplay from "../views/Lineplay";
import Register from "./../views/Register";
import Login from "./../views/Login"


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [

  {
    path: "/home",
    name: "home",
    component: Home,
    children: [
      {path: "/home/login", name: "login", component: Login},
      {path: "main-content", name: 'main-content', component: MainContent},
      {path: "lineplay", name: "linepaly", component: Lineplay},
      {path: "register", name: 'register', component: Register},
    ]
  },
  {
    path: "/",
    name: "home",
    component: Home, 
    children:[
      /**login **/
      {
        path: "/",
        redirect: "home/main-content",
        component: Login
      }
    ]
  }

];

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;