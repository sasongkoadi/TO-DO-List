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
    return state.todos.filter(function(todo) {
      return todo.complete === true;
    }).length;
  },
};

//This methods for change value on state
const mutations = {
  addTodo: (state, payload) => {
    state.todos.push({
      text: payload,
      complete: false,
    });
  },
  deleteTodo: (state, number) => {
    state.todos.splice(number, 1);
  },
  changeTodo: (state, { number, payload }) => {
    state.todos[number].text = payload;
  },
  completeTodo: (state, number) => {
    state.todos[number].complete = !state.todos[number].complete;
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
};

//For Future update
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
