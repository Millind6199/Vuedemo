<template>
  <index/>

      <div class="row mt-5" v-if="!seen">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <div class="col-2"></div>
        <div class="col-9">
          <input class="rounded form-control" type="text" v-model="search" placeholder="Search"><br><br>

          <select class="form-control"  name="category" v-model="post.category" v-on:change="showDataByCategory" required>
            <option v-for="list in cat_list" :key="list.id" v-bind:value="list.id">{{list.cat_name}}</option>
          </select>
          <div class="mt-5">
            <table class="table">
              <thead>
              <tr>
<!--                <th></th>-->
                <th>Product Name</th>
                <th>Product Details</th>
                <th>Product Amount</th>
                <th>Product Image</th>
                <th>Product Status</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="list in filteredProduct" :key="list.id">
<!--                <td><input type="checkbox"></td>-->
                <td>{{list.product_name}}</td>
                <td>{{list.product_details}} </td>
                <td><span>&#8377;</span>{{list.product_amount}}</td>
                <td><img v-bind:src="list.product_image" /></td>
                <td>{{list.product_status}}</td>
                <td>
                  <button class="btn btn-danger" v-on:click="DeletePost(list.id)"><i class="fas fa-trash-alt"></i></button>&nbsp;
                  <button class="btn btn-primary" v-on:click="ViewProduct(list.id)"><i class="fas fa-eye"></i></button>

                </td>

              </tr>

              </tbody>
            </table>

            <Pagination
                :meta_data="meta_data"
                v-on:next="showData">
            </Pagination>
          </div>
        </div>

      </div>
          <div v-else>
              <ViewProduct/>
            </div>

<!--  <JwPagination :items="exampleItems" @changePage="onChangePage"></JwPagination>-->
  <div class="mt-5">
    <FooterC />
  </div>
</template>

<script>

import axios from "axios";
import index from "./index";
import FooterC from "./FooterC";
import Pagination from './Pagination'
import ViewProduct from './viewProduct'

const exampleItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

export default {
  name: "product_list",
  components: {
    index,
    FooterC,
    Pagination,
    ViewProduct,
  },
  data(){
    return {
      post: {
        product_name: null,
        product_amount: null,
        product_details: null,
        product_image: null,
        category: null,

      },
      search:'',
      seen: false,
      cat_list: '',
      product_list: [],
      viewdetails: [],
      file: '',
      exampleItems,
      pageOfItems: [],
      meta_data: {
        last_page: null,
        current_page: 1,
          prev_page_url: null
      },
    }
  },
  methods: {
    showData(page=1) {
      axios.get('http://127.0.0.1:8000/api/products?page='+page,{
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
        }).then(resp => {
            console.warn('resp', resp.data.data.data)

            this.product_list = resp.data.data.data
            // localStorage.setItem('token', resp.token)

        this.meta_data.last_page = resp.data.data.last_page;
            this.meta_data.current_page = resp.data.data.current_page;
            this.meta_data.prev_page_url = resp.data.data.prev_page_url;
       })

      axios.get('http://127.0.0.1:8000/api/categories',{
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }).then(resp => {

        console.warn('resp', resp)
        this.cat_list = resp.data.data
      })

    },
    showDataByCategory(){
        // console.warn('id', this.post.category)
      axios.get('http://127.0.0.1:8000/api/viewproduct/' + this.post.category , {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }).then(view => {
        console.warn('view', view)
        this.product_list = view.data.data
      })
    },


    DeletePost(id){
      axios.delete('http://127.0.0.1:8000/api/delete-product/'+id,{
        headers:{
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }).then(resp=>{
        console.warn('resp' , resp)
        this.showData()
      })
    },


    ViewProduct(id){

      this.seen = true
      this.$router.push( "/viewproduct/"+id)
    },

  },
  computed:{
    filteredProduct: function(){
      return this.product_list.filter((product) => {
        return product.product_name.match(this.search)
      });
    }
  },

  mounted() {
    if(!this.seen){
      this.showData()
    }
    else{
      this.ViewProduct()
    }
  }
}
</script>

<style scoped>
img{
  width: 100px;
  height:100px;
}

</style>