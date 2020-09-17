<template>
    <v-card
       class="mx-auto"
       max-width="700"
       tile >

       <div v-if="activeTask === 1">
        <template  v-for="(todo,index) in showActiveTask" >
            <v-list-item :key="todo.text">
                <TodoListItems :todo="todo" :index="index"></TodoListItems> 
            </v-list-item>
        </template>
       </div>

       <div v-else-if="activeTask === 2">
        <template  v-for="(todo,index) in showCompleteTodo" >
            <v-list-item :key="todo.text">
                <TodoListItems :todo="todo" :index="index"></TodoListItems> 
            </v-list-item>
        </template>
       </div>

       <div v-else>
        <template  v-for="(todo,index) in showTodos">
            <v-list-item :key="todo.text">
                <TodoListItems :todo="todo" :index="index"></TodoListItems> 
            </v-list-item>
        </template>
       </div>

    </v-card>
</template>

<script>
import { mapState, mapGetters }  from 'vuex'
import TodoListItems  from './TodoListItems'
export default {
   name: "TodoList",
   components: {
       TodoListItems
   },
   methods: {
       
   },
   computed: {
       ...mapState(['activeTask']),
       ...mapGetters([
           'showTodos',
           'showActiveTask',
           'showCompleteTodo']),
   },
}

</script>