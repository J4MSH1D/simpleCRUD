import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      users: null,
    };
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    addedUser(state, payload) {
      state.users.push(payload);
    },
    deleteUser(state, payload) {
      let obj = state.users.findIndex((user) => user.payload)
      state.users.splice(obj, 1)
    }
  },
  actions: {
    async getUsers(context) {
      try {
        const res = await axios.get("users");
        context.commit("setUsers", res.data);
        console.log(res.data);
      } catch (e) {
        context.commit("setUsers", e.message);
      }
    },
    async addUser(context, payload) {
      try {
        const form = {
          fullname: payload._value,
          id: null
        }
        const res = await axios.post("users",form);
        context.commit("addedUser", res.data)
      } catch(err) {
        context.commit("setUsers", payload);
      }
    },
    async deleteUser(context, payload) {
      try {
        let id = payload
        await axios.delete("users/"+id)
        context.commit("deleteUser", id)
      } catch(err) {
        console.log(err.message)
      }
    }
  },
});

export default store;
