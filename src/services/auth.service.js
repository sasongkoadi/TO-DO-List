import axios from 'axios'

const API_URL = 'http://127.0.0.1:44010/users/'

class AuthService {
    login(user){
        return axios.post(API_URL + 'login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data))
            }
            return response.data
        })
    }
    
    logout(token){
        return axios.post(API_URL + 'logout', {}, { headers: { Authorization: `Bearer ${token}`}})
            .then(response =>{
                localStorage.removeItem('user')
                response.status
            })
    }

    register(user){
        return axios.post(API_URL + 'signup', {
            name: user.name,
            email: user.email,
            password: user.password
        })
    }
}

export default new AuthService()