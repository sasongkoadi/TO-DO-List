import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate'
import todoList from "./modules/todoList";
import auth from './modules/authModule'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    todoList,
    auth
  },
  plugins: [createPersistedState()]
});
