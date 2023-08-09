import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import '../App.css'



const Login = () => {


  const navigate = useNavigate()

  const [data, setData] = useState({
    email: '',
    password: ''
  })


  const loginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data } = await axios.post('/login', {
        email,
        password,

      })
      // console.log(data);
      if (data.error) {
        toast.error(data.error)


      } else {

        setData({})
        navigate('/welcome')

      }
    } catch (error) {

    }


  }



  return (
    <div className='login'>
      <form onSubmit={loginUser} >

        <label htmlFor="">Email</label>  <br />
        <input type="email" placeholder='emaill' value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /> <br />
        <label htmlFor="">Password</label> <br />
        <input type="password" placeholder='password' value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} /> <br />
        <button type="submit" className='btn btn-primary mt-3'>Submit</button>
      </form>

    </div>
  )
}

export default Login