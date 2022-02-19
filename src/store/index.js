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
    }
  },
  actions: {
    async getUsers(context) {
      try {
        const res = await axios.get("users");
        context.commit("setUsers", res.data);
      } catch (e) {
        context.commit("setUsers", e.message);
      }
    },
    async addUser(context, payload) {
      try {
        await axios.post("users", payload);
        context.commit("addedUser", payload)
      } catch(err) {
        context.commit("setUsers", payload);
      }
    }
  },
});

export default store;
