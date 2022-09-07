import Vue from "vue";
import VueRouter from "vue-router";

// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { showFooter: true }
    },
    {
      path: "/search",
      component: Search,
      meta: { showFooter: true }
    },
    {
      path: "/login",
      component: Login,
      meta: { showFooter: false }
    },
    {
      path: "/register",
      component: Register,
      meta: { showFooter: false }
    },
    // 重定向：在项目跑起来的时候，或者访问/的时候，立马重定向到首页
    {
      path: "*",
      redirect: "/home"
    }
  ]
});
