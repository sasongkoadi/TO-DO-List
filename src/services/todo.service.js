import axios from 'axios'

const API_URL = 'http://127.0.0.1:44010/tasks/'

class todoService {
    async showTasks(userData){
        try {
           await axios.get(API_URL + 'showtasks', userData) 
           .then(response => {return response})
        } catch (error) {
            return error    
        }
    }
}

export default new todoService()