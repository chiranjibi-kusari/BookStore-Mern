import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
      <>
    <div>
          <div id="my_modal_3" className="items-center flex justify-center mt-28">
  <div className="modal-box w-[800px]">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-3'>
      <label htmlFor="">Name</label><br />
      <input type="text" placeholder='Enter your fullname' className='w-80 px-3 py-2 rounded-md outline-none border-2 mt-1'
       {...register("name", { required: true })}
      />
      <br />
      {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='mt-3'>
      <label htmlFor="">Email</label><br />
      <input type="text" placeholder='Enter your email' className='w-80 px-3 py-2 rounded-md outline-none border-2 mt-1'  {...register("email", { required: true })}/>
      <br />
      {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='mt-3'>
      <label htmlFor="">Password</label><br />
      <input type="text" placeholder='Enter your Password' className='w-80 px-3 py-2 rounded-md outline-none border-2 mt-1'  {...register("password", { required: true })}/>
      <br />
      {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
      <button className='bg-pink-500 text-white px-3 py-2 rounded-md cursor-pointer'>Signup</button>
      <p>Have a Account? {" "}
         <Link to='/' className='underline text-blue-500 cursor-pointer'onClick={()=>document.getElementById("my_modal_3").showModal()}
       >Login </Link>
        {/* <Login /> */}
       </p>
   </div>
   </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup