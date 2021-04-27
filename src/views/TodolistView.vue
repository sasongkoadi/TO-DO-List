<template>
    <v-container>
       <Title />
       <InputTodo /> 
       <TodoList />

       <div v-if="showTodos.length >= 1">
        <Footer />
       </div>

       <div v-else>
       </div>
    </v-container>
</template>

<script>
import Title from '../components/Title'
import InputTodo  from '../components/InputTodo'
import TodoList  from '../components/TodoList'
import Footer from '../components/Footer'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
      Title,
      InputTodo,
      TodoList,
      Footer
  },
  computed: {
    ...mapGetters(["showTodos"]) 
  },
};
</script>