import React from 'react'
import InputField from './inputfield'
import {Link} from 'react-router-dom'

const register = () => {

  return (
    <div className='w-screen p-5'>
        <h2 className='font-bold text-xl'>Create an account</h2>
        <div className='flex flex-col justify-center items-center my-10 gap-5'>
            <InputField type="text" ph="First Name" />
            <InputField type="text" ph="Last Name" />
            <InputField type="email" ph="Email" />
            <InputField type="password" ph="Password" />
            <div className='flex gap-3'>
                <input type="checkbox" className='w-5 h-5' />
                <p className='text-gray-500 text-[13px]'>By proceeding, I agree to all <span className='text-blue-500 underline'>T&C</span> and <span className='text-blue-500 underline'> Privacy Policy</span></p>
            </div>
        </div>
        <button className='bg-gradient-to-r from-blue-200 to-blue-400 w-full p-4 rounded-2xl text-xl font-bold text-white shadow-sm mt-10 mb-5'>Create an Account</button>
        <div class="flex items-center"> 
            <hr class="flex-grow border-t border-black shadow-sm"/> 
            <span class="px-3 text-black"> 
                Or 
            </span> 
            <hr class="flex-grow border-t border-black shadow-sm"/> 
        </div> 
        <div className='flex justify-center gap-5 m-7'>
            <button className='border border-black p-3 rounded-xl shadow-md'><img width="25" height="30" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/></button>
            <button className='border border-black p-3 rounded-xl shadow-md'><img width={25} src="https://i.ibb.co/ZKKYNpb/facebook.png" alt="facebook" border="0" /></button>
        </div>
        <p className='text-center'>Already have an account? <span><Link to="/login"><button className='text-blue-500 underline'>Login</button></Link></span></p>
    </div>
  )
}

export default register