import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './Signup.css'


const Signup = () => {

    const navigate = useNavigate()


    // object for storing user data

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    //
    const registerUser = async (e) => {
        //prevent the event
        e.preventDefault()
        const { name, email, password } = data

        try {
            const { data } = await axios.post('/register', {
                name, email, password
            })
            if (data.error) {
                toast.error(data.error)
            }
            else {
                setData({})
            
                toast.success('Registration Successful! Please Login')
                navigate('/loginpage')

            }
           
        } catch (error) {
            console.log(error);
        }




    }






    return (
        <div className='signupFrm' >

            <form className='form' onSubmit={registerUser} >
                <div className='inputcontainer'>
                    <label className='label' for="name">Name:</label>
                    <input type="text" className='input' value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>

                <div className='inputcontainer' >
                    <label className='label' for="email">Email:</label>
                    <input type="email" className='input' required value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                </div>

                <div className='inputcontainer' >
                    <label for="password">Password:</label> <br />
                    <input type="password" id="password" name="password" required value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                </div>

                    <input type='submit' className='submitBtn mt-2' value="Sign Up"/>

    
           </form>

        </div>
    )
}

export default Signup