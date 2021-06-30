<template>
<div>
  <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th></th>


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
export default {
  name: "list"
}
</script>

<style scoped>

</style>