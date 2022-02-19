<template>
  <div class="app">

  </div>
</template>
<script>
import { computed } from '@vue/runtime-core';
import { useStore } from "vuex"

  export default {
    name: "App",
    setup(){
      const store = useStore();
      const users = computed(()=> store.state.users)
      
      return {
        users
      }
    }
  }

</script>