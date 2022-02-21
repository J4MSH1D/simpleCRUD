<template>
  <div class="app">
    <div class="form">
      <div><label for="name">Name</label><input type="text" id="name" v-model="input"></div>
      <div><button @click="addingUser">add</button></div>
    </div>
    <div class="list">
      <div v-if="users" >
        <div>id</div>
        <div class="listOfUsersName">Name</div>
        <div class="listOfUsersButtons">Buttons</div>
      </div>
      <div v-for="user in users" :key="user.id" class="listOfUsers">
        <div>{{user.id}}</div>
        <div class="listOfUsersName">{{user.fullname}}</div>
        <div class="listOfUsersButtons">
          <button>Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity"
import { gettingUsers } from "./composables/getUsers"
import { addUser } from "./composables/addUser"
  export default {
    name: "App",
    setup(){
      const { users }  = gettingUsers()

      const input = ref("")

      async function addingUser() {
        await addUser(input)
        input.value = ""
      }

      return {
        users,
        input,
        addingUser
      }
    }
  }

</script>