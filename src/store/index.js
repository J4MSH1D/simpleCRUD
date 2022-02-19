import { createStore } from 'vuex'
import axios from "axios"


const store = createStore({
    state() {
        return {
            users: null
        }
    },
    mutations: {
        setUsers(state, payload){
            state.users = payload
        }
    },
    actions: {
        async getUsers(context) {
            try {
                const res = await axios.get("users")
                context.commit("setUsers", res.data)
            } catch (e) {
                context.commit("setUsers", e.message)
            }
        }
    }
})

store.dispatch("getUsers")


export default store