<template>
    <v-container>
        <Title :title="title"/>
        <LoginForm />
    </v-container>
</template>

<script>
import LoginForm from '../components/LoginForm'
import Title from '../components/Title'
export default {
    name: 'Home',
    data() {
        return {
            title: 'TO DO LIST'
        }
    },
    components: {
        LoginForm,
        Title
    },

}
</script>

<style>

</style>