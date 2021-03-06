import Vue from "vue";
import VueRouter from "vue-router";

// 路由懒加载
const Home = () => import("views/home/Home.vue");
const Cart = () => import("views/cart/Cart.vue");
const Category = () => import("views/category/Category.vue");
const Profile = () => import("views/profile/Profile.vue");
const Detail = () => import("views/detail/Detail.vue");
const Login = () => import("views/login/index.vue")
const Register = () => import("views/register/register.vue")

Vue.use(VueRouter);

const routes = [
  {
    // 默认路由
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    component: Detail
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: '/register',
    component: Register
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
