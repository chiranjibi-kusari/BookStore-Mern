import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=>document.getElementById("my_modal_3").closest()}
      >✕</Link>

    <h3 className="font-bold text-lg">Login</h3>
   <div className='mt-3'>
      <label htmlFor="">Email</label><br />
      <input type="text" placeholder='Enter your email' className='w-80 px-3 py-2 rounded-md outline-none border-2 mt-1'
      {...register("email", { required: true })}
      />
      <br />
       {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='mt-3'>
      <label htmlFor="">Password</label><br />
      <input type="text" placeholder='Enter your Password' className='w-80 px-3 py-2 rounded-md outline-none border-2 mt-1'
      {...register("password", { required: true })}
      />
      <br />
       {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
      <button className='bg-pink-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-500'>Login</button>
      <p>Not registered? <Link className='underline text-blue-500 cursor-pointer' to="/signup">Signup </Link> </p>
   </div>
   </form>
  </div>
</dialog>
    </div>
    </>
  )
}

export default Login
