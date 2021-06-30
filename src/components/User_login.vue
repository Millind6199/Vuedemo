<template>
  <index/><br><br>
<div v-if="!seen" >
  <center>
  <div class="login rounded">

    <h1>Login</h1>
    <form @submit="login" method="post" >
                <input type="email" class='form-control' name="email" placeholder="Email" v-model="input.email"><br><br>
                <input type="password" class='form-control' name="password" placeholder="password" v-model="input.password"><br><br>
                <button class="btn-primary btn form-control"  type="submit">Login</button><br><br>
                New User?<a href="/signup">Sign in</a>
    </form>

  </div>
  </center>
</div>
<!--  <div v-if="input.email == data.email">-->
  <div v-if = "seen">
    <div v-if="$data">
    <product_list/>
    </div>
    <div v-else>
      User Side
    </div>
  </div>
  <FooterC/>
<!--  </div>-->
</template>

<script>
import axios from 'axios'
import product_list from "./product_list";
import index from "./index";
import FooterC from "./FooterC";
export default {
  name: "User_login",
  components: {
    product_list,
    index,
    FooterC,

  },
  data(){
    return{
      data:undefined,
      seen: false,
      input:{
        email : "",
        password: ""
      }
    }
  },
  methods:{
    login(e){

      axios.post('http://127.0.0.1:8000/api/user', this.input).then((result)=>{

        if(result.data.status == 'success')
        {
          this.seen = true
          this.data = result.data.data
          localStorage.setItem('isAuth', true)
          localStorage.setItem('token', result.data.token)

          this.$router.push({ name: 'dashboard' })

        }

        else {
          alert(result.data.message)
        }
        // console.warn('result' , result)


        // console.warn('name' ,this.data)
      });
      // console.warn(this.post)
      e.preventDefault()
    }

  },
}
</script>

<style scoped>
.form-control{
  width:50%

}
.btn{
  width:10%
}
</style>