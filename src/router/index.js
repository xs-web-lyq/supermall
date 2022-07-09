import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('views/home/Home.vue')
const Profile = ()=> import('views/profile/Profile.vue')
const ShopCart = ()=> import('views/shopcart/ShopCart.vue')
const Category = ()=> import('views/category/Category.vue')

// 使用插件
Vue.use(VueRouter);
const routes = [
    {
        path:'/',
        redirect:'/home'
      },
      {
        path:'/home',
        component: Home
      },
      {
        path:'/Profile',
        component: Profile
      },
      {
        path:'/shopcart',
        component: ShopCart
      },
      {
        path:'/category',
        component: Category
      }
      
]
// 实例化路由
const router = new VueRouter({
    routes,
    mode:'history'
})

// 默认导出
export default router