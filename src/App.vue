<template>
  <div class="app">

  </div>
</template>
<script>
import { gettingUsers } from "./composables/getUsers"
  export default {
    name: "App",
    setup(){
      const { users } = gettingUsers()
      
      return {
        users
      }
    }
  }

</script>