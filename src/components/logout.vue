<template>
<div v-="logout"></div>
</template>

<script>
export default {
  name: "logout",
  method:{
    logout() {
      localStorage.removeItem('isAuth')
    }
  }

}
</script>

<style scoped>

</style>