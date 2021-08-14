import todoService from "../../services/todo.service";

//For state data
const state = {
  todos: [],
};

//This Methods for view data without change data
const getters = {
  showTodos: (state) => {
    return state.todos;
  },
  showCompleteTodo: (state) => {
    return state.todos.filter(function (todo) {
      return todo.complete === true;
    }).length;
  },
};

//This methods for change value on state
const mutations = {
    addTodo: (state, { payload }) => {
        state.todos.push({
          description: payload,
          complete: false,
        });
    },

    deleteTodo: (state, { index }) => {
        state.todos.splice(index, 1);
    },

    changeTodo: (state, { index, payload }) => {
        state.todos[index].description = payload;
    },

    completeTodo: (state, { index }) => {
        state.todos[index].complete = !state.todos[index].complete;
    },

    completeAll: (state) => {
        var count = 0;
        for (var index in state.todos) {
          if (state.todos[index].complete === true) {
            count++;
          }
        }
        if (state.todos.length === count) {
          for (index in state.todos) {
            state.todos[index].complete = false;
          }
        } else {
          for (index in state.todos) {
            state.todos[index].complete = true;
          }
        }
    },

    tasksData(state, payload) {
      state.todos = payload
      console.log('todos data',state.todos);
    }

};

//For Future update
const actions = {

  async myTodos({commit}){
      const data = await todoService.showTasks() 
      commit('tasksData', data)
      console.log('action test', data);
  },

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
