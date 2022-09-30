import axios from 'axios';

export const getStudent = () => {
  const request = axios.get('https://api-challenge-week-resilia.herokuapp.com/').then((response)=> response.data)
  return request
}

export const postStudent = (obj) => {
  const post  = axios.post('https://api-challenge-week-resilia.herokuapp.com/', obj)
  return post
}

export const deleteStudent = async (id) => {
  return await axios.delete(`https://api-challenge-week-resilia.herokuapp.com/${id}`)
}

