<template>
    <v-card        
        class="mx-auto"
        max-width="700"
        max-height="600"
        tile >
       <v-text-field 
        class="TextInput"
        ref="disableInput"
        label="What's On Your Mind?"
        @keyup.enter="addTodoList"
        clearable/>
    </v-card>
</template>

<script>
import {mapMutations}  from 'vuex'
export default {
    name: "InputTodo",
    data(){
        return {
            item: {},
        }
    },
    methods: {
        ...mapMutations([
            'addTodo'
        ]),
        addTodoList(event){
            if (!event.target.value.trim()) return;
            this.item = event.target.value
            this.addTodo(this.item)
            this.$refs.disableInput.reset()
        }
    },
}
</script>

<style scoped>
    v-text-field {
        max-width: 50%;
        width: 25%;
        border: 2px solid,
    }
    div {
        text-align: center;
        margin: 20px;
    }
    .TextInput {
        font-size: 1.8rem;
        letter-spacing: normal;
    }
</style>