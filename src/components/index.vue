<template>
                                  <!--   NAV BAR-->
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><strong>E-Kart</strong></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
<!--            <a class="nav-link active" aria-current="page" href="/product">Home</a>-->
          </li>
          <li class="nav-item navbar-right" v-if="isAuth">

              <button class="btn btn-dark" v-on:click="logout"><strong>Logout</strong></button>


          </li>

        </ul>
<!--        <li class="nav-item dropdown">-->
<!--          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--            Dropdown-->
<!--          </a>-->
<!--          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">-->
<!--            <li><a class="dropdown-item" href="#">Action</a></li>-->
<!--            <li><a class="dropdown-item" href="#">Another action</a></li>-->
<!--            <li><hr class="dropdown-divider"></li>-->
<!--            <li><a class="dropdown-item" href="#">Something else here</a></li>-->
<!--          </ul>-->
<!--        </li>-->
      </div>
    </div>
  </nav>
  <br><br>

                                      <!--  SIDE BAR-->


  <div class="mt-0">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />


    <div class="w3-sidebar w3-grey w3-bar-block mt-0" style="width:16%; height:100%;" >
      <div class="w3-bar-item mt-3">

    </div>
      <div class="w3-dropdown-hover">
        <button class="w3-button"><h4><a href="/dashboard" class="w3-bar-item w3-button">Dashboard</a></h4></button>
      </div>

      <div class="w3-dropdown-hover">
        <button class="w3-button"><h4><a href="/addproduct" class="w3-bar-item w3-button">Add Product</a></h4></button>
      </div>

      <div class="w3-dropdown-hover">
        <button class="w3-button"><h4><a href="/product" class="w3-bar-item w3-button">View Product</a></h4></button>
      </div>

      <div class="w3-dropdown-hover">
        <button class="w3-button"><h4><a href="#" class="w3-bar-item w3-button">About Us</a></h4></button>
      </div>

      <div class="w3-dropdown-hover">
        <button class="w3-button"><h4><a href="#" class="w3-bar-item w3-button">Contact Us</a></h4></button>
      </div>
    </div>
  </div>
</div>



</template>

<script>
export default {
  name: "index",
  data(){
    return{
      seen:true,
      isAuth:false,
      search:'',
    }
  },
  mounted() {
    this.isAuth = localStorage.getItem('isAuth');
  },

  methods:{
    logout(){
      if(localStorage.getItem('isAuth') == "true")
      {
        this.seen = false
        localStorage.removeItem('isAuth')
        this.$router.push({name: 'login'})
      }

    },


  }
}
</script>

<style scoped>


</style>