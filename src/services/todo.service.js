import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://127.0.0.1:44010/tasks/'

class todoService {
    async showTasks(){
        try {
           const response = await axios.get(API_URL + 'showtasks', { headers: authHeader() } )
           return response.data 
        } catch (error) {
            return error
        }
    }
}

export default new todoService()