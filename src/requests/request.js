import axios from 'axios';

export const getStudent = () => {
  const request = axios.get('http://localhost:3000/').then((response)=> response.data)
  return request
}