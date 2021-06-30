import { createWebHistory, createRouter } from "vue-router";
// import Home from "@/views/Home.vue";
// import About from "@/views/About.vue";
import PostComponents from "../components/PostComponents";
import Home from "../components/Home";
 import product from "../components/product_list";
import login from "../components/User_login";
import signup from "../components/signup";
import viewProduct from "../components/viewProduct";
import Addproduct from "../components/Addproduct";
import Dashboard from "../components/Dashboard";


const routes = [
  {
    path: "/",
    name: "login",
    component: login,
    meta: {
      requiresAuth: false,
    },


  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
    meta: {
      requiresAuth: false,
    },


  },

  {
    path: "/post",
    name: "post",
    component: PostComponents,
    meta: {requiresAuth: true},
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {requiresAuth: true},
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {requiresAuth: true},
  },
  {
    path: "/addproduct",
    name: "addproduct",
    component: Addproduct,
    meta: {requiresAuth: true},
  },

  {
    path: "/product",
    name: "product",
    component: product,
    meta: {requiresAuth: true},
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/viewproduct/:id",
    name: "viewproduct",
    component: viewProduct,
    meta: {
      requiresAuth: false
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('isAuth') == 'true') {
      next()
      return
    }
    next('/')
  } else {
    next()
  }
})



export default router;