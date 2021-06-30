<template>
  <div>
    <table>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>


      </tr>
      <tr v-for="lists in list" v-bind:key="lists.id">
        <td>{{lists.todo}}</td>
        <td>{{lists.status}}</td>
        <td><button v-on:click="DeletePost(lists.id)">Remove</button>
          <button v-on:click="UpdatePost(lists.id)">Edit</button></td>

      </tr>
    </table>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VueAxios from 'vue-axios'
import axios from 'axios'

// Vue.use(VueAxios,Axios)
export default {
  name:'Home',
  data(){
      return{
        list:undefined,
      }
  },
  methods:
      {
        getuser(){
          axios.get('http://127.0.0.1:8000/api/todos').then(resp=>{
            console.warn('resp' , resp)
            this.list = resp.data.data
          })

        },
        DeletePost(id){
          axios.delete('http://127.0.0.1:8000/api/delete-todo/'+id).then(resp=>{
            console.warn('resp' , resp)

            // this.list = resp.data
            /*this.list.map(function(d,index){
              if(d.id == id ){
                this.list.splice(index, )
              }
            })*/
            this.getuser()
          })
        },
        // UpdatePost(id){
        //   axios.post('http://localhost:3000/posts/'+id).then(resp=>{
        //     // this.list = resp.data
        //
        //       console.warn('resp' , resp)
        //   })
        // }
      },
  mounted(){
    this.getuser()
  },


}
</script>
<style>
th,td{
  padding:5px

}
</style>