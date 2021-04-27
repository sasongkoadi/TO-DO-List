import AuthService from '../../services/auth.service'

const userData = JSON.parse(localStorage.getItem('user'))
const initialState = userData
    ? { status: { loggedIn: true }, userData}
    : { status: { loggedIn: false }, userData: null}

const state = {
    user: initialState
}

const getters = {
    showUser: (state) => {
        return state.user
    }
}

const mutations = {
    loginSuccess(state) {
        state.status.loggedIn = true,
        state.user = userData 
    },

    loginFailure(state) {
        state.status.loggedIn = false,
        state.user = null
    },

    logout(state) {
        state.status.loggedIn = false,
        state.user = null
    },

    registerSuccess(state) {
        state.status.loggedIn = false
    },

    registerFailure(state) {
        state.status.loggedIn = false
    }
}

const actions = {
    login({commit}, userData) {
        return AuthService.login(userData).then(
            user => {
                commit('loginSuccess')
                return Promise.resolve(user)
            },
            error => {
                commit('loginFailure')
                return Promise.reject(error)
            }
        )
    },

    register({commit}, userData) {
        return AuthService.register(userData).then(
            response => {
                commit('registerSuccess')
                return Promise.resolve(response.data)
            },
            error => {
                commit('registerFailure')
                return Promise.resolve(error)
            }
        )
    },

    logout(userData) {
        const token = userData.status.user.token
        return AuthService.logout(token).then(
            response => {
                return response
            }
        )
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}