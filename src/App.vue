<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <home/>-->
<!--  <Post/>-->
  <router-view></router-view>
<!--  <login/>-->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
//  import home from './components/Home'
// import login from './components/Login'
// import Post from './components/PostComponents'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // home,
    // Post
    // login,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import'~bootstrap/dist/css/bootstrap.css'

</style>
