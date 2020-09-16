const state = {
  todos: [],
};

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
  changeTodo: (state, number, payload) => {
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
        state.completeTodo = state.todos.filter((todo) => {
          return todo.complete === true;
        });
      }
    } else {
      for (index in state.todos) {
        state.todos[index].complete = true;
        state.completeTodo = state.todos.filter((todo) => {
          return todo.complete === true;
        });
      }
    }
  },
};

const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
