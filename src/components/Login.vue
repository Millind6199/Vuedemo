<template>
  <div id="login" v-if="!seen">
    <h1>Login</h1>
    <input type="text" class='form-control' name="username" v-model="input.username" placeholder="Username" />
    <input type="password" class='form-control' name="password" v-model="input.password" placeholder="Password" />
    <button type="button" class='form-control' v-on:click="login()">Login</button>
  </div>

  <div v-if="seen">
    <!--    <p>Testing condition rendering</p>-->
    <signup/>
  </div>

</template>

<script>
import signup from '../components/signup'
export default {
  name: 'Login',
  components: {
    signup,
  },
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      seen: false,
    }
  },
  methods: {
    login() {
      this.seen = true;
      }
  }
}
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>