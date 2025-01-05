import { useEffect } from 'react';
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }

  /*const getUserById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`) //farklı bir kullanım
    console.log(response.data)
  }*/

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser)
  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(deletedResponse.data)
  }

  const getUserById = async (userId)=> {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    return response.data.postId;
  }

  const getPostById = async(postId)=> {
    const response = await axios.get("http://jsonplaceholder.typicode.com/posts/7" + postId);
    return response.data
  }



  const getPost = async () => {
    const postId = await getUserById(1);
    const postData = await getPostById(postId);
    console.log(postData)
  }


  useEffect(() => {
    // getAllUsers();
    //getUserById(1)
    // const newUser = {
    //   "username": "bilal",
    //   "password": "3636"
    // }
    // createUser(newUser)
    // updateUser("d902", {
    //   "username": "yakup",
    //   "password": "5555"
    // })
    //deleteUserById("d902")

    getPost();


  }, []);

  return (
    <div>

    </div>
  )
}

export default App
