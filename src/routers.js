// // 1. 引入路由
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Login from './src/components/Login.vue'
// import Home from './src/components/Home.vue'

// // 在模块化工程中 , 必须要用use明确的安装一个路由功能
// Vue.use(VueRouter)

// // 2. 实例化路由
// const router = new VueRouter({
//   routes: [{
//     path: '/',
//     redirect: '/login'
//   }, {
//     path: '/login',
//     component: Login
//   }, {
//     path: '/home',
//     component: Home
//   }]
// })

// // 3. 导出路由
// export default router
// // 导出 的路由 由main.js接收.挂载到vue实例上

// 1. 引入路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 第三步 : 组件 (引入组件)
import Login from './src/components/Login.vue'
import Home from './src/components/Home.vue'

// 在模块化工程中, 必须要用use明确的安装一个路由功能
Vue.use(VueRouter)

// 2. 实例化路由
const router = new VueRouter({
  // 第二步 : 规则
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 3. 通过es6 模块化语法 把 router 导出去
export default router
