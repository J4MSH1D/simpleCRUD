<template>
  <div class="app">
    <div class="form">
      <div>
        <label for="name">Name</label>
        <input type="text" id="name" v-model="input" @keydown.enter="addingUser" />
      </div>
      <div>
        <button @click="addingUser">Add</button>
      </div>
    </div>
    <div class="list">
      <div v-if="users">
        <div>id</div>
        <div class="listOfUsersName">Name of the user</div>
        <div class="listOfUsersButtons">Buttons</div>
      </div>
      <div v-for="user in users" :key="user.id" class="listOfUsers">
        <div>{{ user.id }}</div>
        <div class="listOfUsersName">{{ user.fullname }}</div>
        <div class="listOfUsersButtons">
          <button @click="deletingUser(user.id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, computed } from "@vue/reactivity";
  import { gettingUsers } from "./composables/getUsers";
  import { addUser } from "./composables/addUser";
  import { deleteUser } from "./composables/deleteUser";
  export default {
    name: "App",
    setup() {
      const { users } = gettingUsers();

      const input = ref("");

      function addingUser() {
        addUser(input);
        input.value = "";
      }

      function deletingUser(data) {
        deleteUser(data);
      }

      const currentUser = computed(()=> {
        return users.value.filter(user => user.id === 1)
      })

      return {
        users,
        input,
        addingUser,
        deletingUser,
        currentUser
      };
    },
  };
</script>
