import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';

createApp(App).use(router).mount('#app')
// import '@babel/polyfill'
// import 'mutationobserver-shim'
// // import './plugins/bootstrap-vue'
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import Vue from 'vue'
// import App from './App.vue'
// // import VueRouter from 'vue-router'
// import { createWebHistory, createRouter } from "vue-router";
// import Home from './components/Home'

// import PostComponents from "./components/PostComponents";
// // Vue.use(VueRouter);
// const routes = [
//     {path:'/' , component:Home},
//     {path:'/post' , component:PostComponents}
// ]
// const router = new VueRouter({
//     routes
// })
// Vue.config.productionTip = false
// new Vue ({
//     router:router,
//     render: h => h(App),
// }).$mount('#app')
// // createApp(App).mount('#app')
