<template>
  <div>
    <index/>
  </div>
 <div class="mt-5">
   <div class="row">
     <div class="col-3"></div>
     <div class="col-8">
         <div class="card mb-3">
           <img v-bind:src="viewdetails.product_image" class="card-img-top" alt="...">
         </div>

         <div class="card-body">
           <h5 class="card-title">{{viewdetails.product_name}}</h5>
           <p class="card-text">{{viewdetails.product_details}}</p>
           <p class="card-text"><strong class="text-muted"><span>&#8377;</span>{{viewdetails.product_amount}}</strong></p>
         </div>

     </div>
   </div>

 </div>
  <div>
    <FooterC/>
  </div>
</template>

<script>
import axios from "axios";
import index from "./index"
import FooterC from "./FooterC";

export default {
  name: "viewProduct",
  components:{
    index,
    FooterC
  },
  data(){
    return{
      viewdetails:[],
    }
  },

  methods: {
    ViewProduct() {

      axios.get('http://127.0.0.1:8000/api/viewproduct/' + this.$route.params.id , {
        headers : {
          'Authorization' : `Bearer ${localStorage.getItem('token')}`
        }
      }).then(view => {
        console.warn('view', view)
        this.viewdetails = view.data.data
      })
    }
  },
  mounted() {
    this.ViewProduct()
  }

}


</script>

<style scoped>
img{
  width: 100%;
  height:400px;
}

</style>