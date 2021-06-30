<template>
  <div>
    <h1>PostComponents</h1>
    <form @submit="submitData" method="post">
      <input type="text" name="title" placeholder="email" v-model="post.todo"><br><br>
      <input type="text" name="author" placeholder="first" v-model="post.status"><br><br>
      <button type="submit">Submit</button>

    </form>
    <home/>
  </div>
  <!--  <div>-->
  <!--    <ul v-for="lists in list" v-bind:key="lists.title">-->
  <!--      <li>{{lists.title}}</li>-->
  <!--      <li>{{lists.author}}</li>-->
  <!--    </ul>-->
  <!--  </div>-->
</template>
<script>
// import vue from 'vue'
import home from '../components/Home'
import axios from 'axios'
// import vueAxios from 'vue-axios'
// vue.use(axios , vueAxios)
export default {
  name:'PostComponents',
  components:{
    home,
  },
  data() {
    return {
      post:{
        todo:null,
        status:null
      },
      list:undefined,
    }
  },
  methods:{
    submitData(e){
      axios.post('http://127.0.0.1:8000/api/save-todo', this.post).then((result)=>{

        console.warn('result' , result)
      })
      // console.warn(this.post)
      e.preventDefault()
    }
  }
}
</script>
