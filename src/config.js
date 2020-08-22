import axios from 'axios'

export default axios.create({
  baseURL: 'https://justcook-backend.herokuapp.com/api',
  headers: {
    'Content-type': ['application/json', 'multipart/form-data']
  }
})
