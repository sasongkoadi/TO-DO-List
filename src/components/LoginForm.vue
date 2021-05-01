<template>
    <form name="form" >
        <v-row justify="center">
            <v-text-field
                v-model="user.email"
                label="E-mail"
                name="user.email"
                @input="$v.user.email.$touch()"
                :error-messages="emailErrors"
                outlined
                required
            ></v-text-field>
        </v-row> 
        <v-row>
            <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                v-model="user.password"
                name="user.password"
                label="Password"
                class="input-group--focused"
                @click:append="show1 = !show1"
                @keyup.enter="handleLogin"
                @input="$v.user.password.$touch()"
                :error-messages="passwordErrors"
                outlined
                required
            ></v-text-field>
        </v-row>
        <div v-if="showError">
            <v-alert 
                v-model="alert"
                dense
                outlined
                type="error"
                dismissible 
            >Username or Password is incorrect</v-alert>
        </div>
        <v-row justify="center">
            <v-btn 
            @click="handleLogin" 
            :loading=loading>
                Submit
            </v-btn>
        </v-row>

    </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { email, required, minLength } from 'vuelidate/lib/validators' 
import User from '../models/user'
export default {
    mixins: [validationMixin],
    validations: {
        user: {
            password: {
                required,
                minLength: minLength(8),
            },
            email: {
                required,
                email
            }
        }
    },
    name: 'LoginForm',
    data() {
        return {
            user: new User('', ''),
            email: '',
            password: '',
            loading: false,
            alert: true,
            showError: false,
            show1: false,
            }
    },
    computed: {
        loggedIn(){
            return this.$store.state.auth.user.status.loggedIn 
        },
        emailErrors () {
            const errors = []
            if (!this.$v.user.email.$dirty) return errors
            !this.$v.user.email.email && errors.push('Must be valid e-mail')
            !this.$v.user.email.required && errors.push('E-mail is required')
            return errors
        },
        passwordErrors(){
            const errors = []
            // if (!this.$v.user.password.$dirty) return errors
            !this.$v.user.password.minLength && errors.push(`Password must have at least 8 letters.`)
            return errors
        }
    },
    mounted() {
        if(!this.loggedIn){
            this.$router.push({name: 'Home'}).catch(() => {})
        }
    },
    created() {
        if(this.loggedIn){
            this.$router.push({ path: '/todo' }).catch(() => {})
        }    
    },
    methods: {
        handleLogin(){
            this.loading = true
            this.$store.dispatch('auth/login', this.user).then(
                () => {
                    return this.$router.push({ path: '/todo' }).catch(() => {})
                },
                error => {
                    this.alert = true
                    this.showError = true
                    this.loading = false
                    return error
                }
            )
        }
    },
}
</script>

<style>

</style>