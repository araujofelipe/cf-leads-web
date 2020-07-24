import axios from 'axios'

const path = process.env.REACT_APP_API_HOST

export default {
  list: data => axios.post(`${path}/leads/list`, data),
}
