<template>
  <div id="secure" v-if="!seen">
    <h1>Home Page</h1>
    <button v-on:click="logout"> Logout</button>  </div>
  <div v-if="seen">
    <login/>
  </div>
</template>

<script>
import login from  '../components/Login'
export default {
  name: 'Home2',
  components:{
    login
  },
  data() {
    return {
      seen:false,
    }
  },
  methods:{
    logout(){
      this.seen = true

    }
  }
}
</script>

<style scoped>
#secure {
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 20px;
  margin-top: 10px;
}
</style>