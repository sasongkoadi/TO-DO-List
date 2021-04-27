<template>
        <form name="form" >
                <v-row justify="center">
                    <v-text-field
                        v-model="user.email"
                        label="email"
                        outlined
                    ></v-text-field>
                </v-row> 
                <v-row>
                    <v-text-field
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                        v-model="user.password"
                        name="password"
                        label="Password"
                        hint="At least 8 characters"
                        class="input-group--focused"
                        @click:append="show1 = !show1"
                        outlined
                    ></v-text-field>
               </v-row>
               <v-row justify="center">
                   <v-btn @click="handleLogin" :loading="false">
                       Submit
                   </v-btn>
               </v-row>
        </form>
</template>

<script>
import User from '../models/user'
export default {
    name: 'LoginForm',
    data() {
        return {
            user: new User('', ''),
            loading: false,
            show1: false,
            password: 'Password',
            rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => (`The email and password you entered don't match`),
            },
        }
    },
    computed: {
        loggedIn(){
            console.log('Store', this.$store);
            return this.$store.state.auth.user.status.loggedIn 
        }
    },
    mounted() {
        if(!this.loggedIn){
            this.$router.push('')
        }
    },
    created() {
        if(this.loggedIn){
            this.$router.push('/todo')
        }    
    },
    methods: {
        handleLogin(){
            this.loading = true
            this.$store.dispatch('auth/login', this.user).then(
                () => {
                    console.log('masuk bro');
                    this.$router.push('/todo')
                },
                error => {
                    this.message = (error.response && error.response.data && error.response.data.message ) ||
                    error.message || 
                    error.toString()
                }
            )
        }
    },
}
</script>

<style>

</style>