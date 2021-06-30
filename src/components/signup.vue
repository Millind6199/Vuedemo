<template>
  <index/>
  <br><br>
  <div id="login" v-if="!seen">
    <center>
    <div class="signup rounded ">
    <h1>Sign Up</h1>
    <input type="text" class='form-control' name="username" v-model="input.username" placeholder="Username" /><br><br>
    <input type="email" class='form-control' name="email" v-model="input.email" placeholder="Email id" /><br><br>
    <input type="password" class='form-control' name="password" v-model="input.password" placeholder="Password" /><br><br>
    <input type="password" class='form-control' name="cpassword" v-model="input.cpassword" placeholder="Confirm Password" /><br><br>

    <button class="btn btn-primary" type="button" v-on:click="signup()">Sign Up</button><br><br>
    Already User?<a  href="/">Login</a>
  </div>
    </center>
  </div>
  <div v-else>
    <Product_list/>
  </div>
 <FooterC/>
</template>

<script>
import axios from 'axios'
import Product_list from "./product_list"
import index from "./index"
import FooterC from "./FooterC"

export default {
  name: "signup",
  components: {
    Product_list,
    index,
    FooterC,
  },
  data() {
    return {
      input: {
        username: "",
        email: "",
        password: "",
        cpassword: "",

      },
      seen: false

    }
  },
    methods: {
      signup() {
       axios.post( 'http://127.0.0.1:8000/api/signup', this.input).then((result)=>{

          if(result.data.status == 'success')
          {
            this.seen = true
            this.data = result.data.data
          }

          else {
            alert(result.data.message)
          }

        });

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