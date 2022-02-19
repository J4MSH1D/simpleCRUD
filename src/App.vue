<template>
  <div class="app">
    <div class="form">
      <div><label for="name">Name</label><input type="text" id="name" v-model="input"></div>
      <div><button @click="add({fullName: input})">add</button></div>
    </div>
    <div class="list">
      <div>
        <div>id</div>
        <div class="listOfUsersName">Name</div>
        <div class="listOfUsersButtons">Buttons</div>
      </div>
      <div v-for="user in users" :key="user.id" class="listOfUsers">
        <div>{{user.id}}</div>
        <div class="listOfUsersName">{{user.fullName}}</div>
        <div class="listOfUsersButtons">
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity"
import {gettingUsers} from "./composables/getUsers"
  export default {
    name: "App",
    setup(){
      const { users } = gettingUsers()

      const input = ref("")

      return {
        users,
        input,
      }
    }
  }

</script>