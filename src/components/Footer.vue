<template>
   <v-card
       class="mx-auto"
       max-width="700"
       tile>

      <v-footer
          padless>
          <v-row>
              <v-col
              cols="3"
              class="text-center">

                <v-btn 
                text 
                normal 
                color="primary" 
                @click="completeAll">
                    <caption >Complete : {{showCompleteTodo.length}}</caption>
                </v-btn>
              </v-col>

              <v-col 
              cols="6"
              class="text-center">
                <v-btn text normal color="grey" @click="allTaskView" >All</v-btn>
                <v-btn text normal color="grey" @click="activeTaskView" >Active</v-btn>
                <v-btn text normal color="grey" @click="completeTaskView" >Complete</v-btn>
              </v-col>

              <v-col 
              cols="3"
              class="text-center">

                <v-btn text normal disabled >
                    <caption>Item : {{showTodos.length}}</caption>
                </v-btn>

              </v-col>
          </v-row>
      </v-footer>  
      <v-footer
      padless
      dark>

        <v-col
          class="text-center footerStyle "
          cols="12">

          <v-card-text
          class="footerStyle">
            {{ new Date().getFullYear() }} — By <strong>SasongkoAdi</strong>
          </v-card-text>

        </v-col>
      </v-footer>
   </v-card>            
</template>

<script>
import { mapGetters, mapMutations }  from 'vuex'
export default {
    name: "Footer",
    methods: {
        ...mapMutations([
            'completeAll',
            'activeTaskView',
            'completeTaskView',
            'allTaskView']) 
    },
    computed: {
        ...mapGetters([
            'showTodos',
            'showCompleteTodo']),
    },
}
</script>

<style scoped>
    .buttonComplete {
        padding: flex;
    }
    .itemTodo {
        padding: flex;
    }
    .footerStyle {
        padding-top: 4px !important;
        padding-bottom: 4px !important;
    }
</style>
