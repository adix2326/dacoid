import React from 'react'
import {Link} from 'react-router-dom'
import InputField from './inputfield'

const login = () => {
    return (
        <div className='w-screen p-5'>
            <h2 className='font-bold text-xl'>Welcome Back</h2>
            <div className='flex flex-col justify-center items-center my-10 gap-5'>
                <InputField type="email" ph="Email" />
                <InputField type="password" ph="Password" />
                <p className='text-gray-500 text-[13px] underline'>Forgot your password?</p>
            </div>
            <Link to="/page3"><button className='bg-gradient-to-r from-blue-200 to-blue-400 w-full p-4 rounded-2xl text-xl font-bold text-white shadow-sm mt-10 mb-5'>Sign In</button></Link>
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
            <p className='text-center'>Don't have an account yet? <span><Link to="/register"><button className='text-blue-500 underline'>Create an account</button></Link></span></p>
        </div>
      )
}

export default login