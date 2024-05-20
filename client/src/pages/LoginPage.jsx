import React from 'react';
import {HiOutlineUser,HiUserGroup} from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";
import { toast } from 'react-toastify';
import {useFormik} from "formik";
import { LoginValidate } from '../validatePages';

const initialValues={email:'',password:''}
const LoginPage = () => {
  const {values,handleBlur, errors,touched,handleChange}=useFormik({
    initialValues:initialValues,
    validationSchema:LoginValidate
      })
  return (
    <div className='flex h-screen justify-center items-center' style={{backgroundImage:'linear-gradient(to right, yellow,blue)'}}>
        <div className='flex flex-col gap-4 border-2 border-slate-300 rounded-md p-4 bg-white'>
          <div className='grid justify-items-center text-zinc-400'>
            <HiUserGroup className='w-40 h-20'/>
          </div>
            <div className='flex items-center rounded-l-full bg-zinc-400 p-1'>
                <HiOutlineUser className='w-10 h-6 border-r-2 border-black'/>
                <input type='text' placeholder='Username' 
                className='outline-none bg-zinc-400 p-1 w-80' name='username'
                value={values.username} onChange={handleChange} onBlur={handleBlur}/>
            </div>
            {errors.username && touched.username ? 
            <p className='text-red-800 text-xl'>{errors.username}</p> 
            : null }
            <div className='flex items-center rounded-l-full bg-zinc-400 p-1'>
                < RiLockPasswordFill className='w-10 h-6 border-r-2 border-black'/>
                <input type='password' placeholder='Password' 
                className='outline-none bg-zinc-400 p-1 w-80' name='password'
                value={values.password}  onChange={handleChange} onBlur={handleBlur}/>
            </div>
            {errors.password && touched.password ? 
            <p className='text-red-800 text-xl'>{errors.password}</p> 
            : null }
            <button style={{backgroundImage: 'linear-gradient(to right,green,red'}}
            className='text-white text-lg rounded-full' 
            onClick={() => {
              console.log(values)
              toast.success("Login Success")
            }
              
            }>Login</button>

        </div>
    </div>
  )
}

export default LoginPage