import axios from 'axios'
const instance = axios.create()
console.log(instance)

instance.interceptors.request.use(config => {

})

instance.interceptors.response.use(response => {

})
