<template>
  <index/>
  <div class="row mt-5">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="col-5"></div>
    <div class="col-6">
      <div>

        <form @submit="submitData" method="post" >
          <select class="form-control" name="category" v-model="post.category" required>
            <option value="" disabled selected hidden>Select your option</option>
            <option v-for="list in cat_list" :key="list.id" v-bind:value="list.id">{{list.cat_name}}</option>
          </select>

          <br><br>
          <input type="text" class="form-control" name="product_name" placeholder="Product Name" v-model="post.product_name" required><br><br>
          <input type="text" class="form-control" name="product_amount" placeholder="Product Amount" v-model="post.product_amount" required><br><br>
          <input type="file" class="form-control" name="product_image" ref="file" v-on:change="handleFileUpload()" required><br><br>
          <textarea class="form-control" name="product_details" v-model="post.product_details" required></textarea><br><br>
          <button  class="form-control btn-primary" type="submit">Submit</button>

        </form>
      </div>
    </div>
  </div>
  <FooterC/>
</template>

<script>
import axios from "axios"
import index from "./index"
import FooterC from "./FooterC";

export default {
  name: "Addproduct",
  components:{
    index,
    FooterC,
  },
  data() {
    return {
      post: {
        product_name: null,
        product_amount: null,
        product_details: null,
        product_image: null,
        category: null,

      },
      cat_list:[]
    }
  },
  methods:{
    showCategory(){
      axios.get('http://127.0.0.1:8000/api/categories',{
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }).then(resp => {

        console.warn('resp', resp)
        this.cat_list = resp.data.data
      })

    },
    handleFileUpload() {
      this.post.product_image = this.$refs.file.files[0];
    },
    submitData(e) {
      let data = new FormData();
      data.append('product_name', this.post.product_name);
      data.append('product_amount', this.post.product_amount);
      data.append('product_details', this.post.product_details);
      data.append('category', this.post.category);
      data.append('product_image', this.post.product_image);
      axios.post('http://127.0.0.1:8000/api/addproducts', data , {
        headers: {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }).then((result) => {

        console.warn('result', result)
        this.$router.push('/product')
      })
      // console.warn(this.post)
      e.preventDefault()
    },
  },
  mounted() {
    this.showCategory()
  }
}
</script>

<style scoped>
.form-control{
  width:50%;
}
</style>