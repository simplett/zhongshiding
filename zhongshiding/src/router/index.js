import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/**
 * 处理路由页面切换时，异步组件加载过渡的处理函数
 * @param {Object} AsyncView 需要加载的组件，如 import('@/components/home/Home.vue')
 * @return {Object} 返回一个promise对象
 */
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: AsyncView,
    // 异步组件加载时使用的组件
    loading: require("../components/public/RouterLoading"),
    // 加载失败时使用的组件
    error: require("../components/public/RouterLoading").default,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 10000
  });
  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    }
  });
}

const routes = [
  {
    path: "/home",
    name: "home",
    component: () => lazyLoadView(import("@/views/home/Home.vue")),
    meta: {
      requireAuth: false
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => lazyLoadView(import("@/views/Login/Login.vue")),
    meta: {
      requireAuth: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => lazyLoadView(import("@/views/Login/Register.vue")),
    meta: {
      requireAuth: false
    }
  },
  {
    path: "/404",
    name: "404",
    component: () => lazyLoadView(import("@/components/404.vue")),
    meta: {
      requireAuth: false
    }
  },
  {
    //重定向 首页
    path: "/",
    name: "/",
    redirect: "/home"
  },
  {
    // 重定向 404 等页面
    path: "**",
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

//路由拦截器
router.beforeEach((to, from, next) => {
  //根据字段判断是否路由过滤
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.getItem("token")) {
      //身份信息获取
      next();
    } else {
      next({
        path: "/login"
      });
    }
  } else {
    next();
  }
});

export default router;
