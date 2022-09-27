import axios from 'axios';

export const getStudent = () => {
  const request = axios.get('http://localhost:3000/').then((response)=> response.data)
  return request
}

export const postStudent = (obj) => {
  const post  = axios.post('http://localhost:3000/', obj)
  return post
}

