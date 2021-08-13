<template>
    <v-container>
       <Title :title="title" />
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
import {
    mapGetters,
    mapActions} from 'vuex'

export default {
  name: 'App',
  components: {
      Title,
      InputTodo,
      TodoList,
      Footer
  },
  data() {
      return {
          title: 'YOUR TO DO'
      }
  },
  computed: {
    ...mapGetters([
      "showTodos",
      ]), 
    loggedIn(){
        console.log(this.$store);
        console.log(this.$store.state.auth);
        return this.$store.state.auth.user.status.loggedIn
    }
  },
  mounted() {
      this.$store.dispatch('tasks.myTodos')
      if(!this.loggedIn){
          this.$router.push({ name: 'Home'}).catch(() => {})
      }
  },
  methods: {
    ...mapActions({
        mytodos: "tasks/myTodos"
    }), 
  },
};
</script>