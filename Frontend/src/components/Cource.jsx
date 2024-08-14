import React from 'react'
import list from "../../public/list.json"
import Card from '../components/Card'
import {Link} from "react-router-dom"

const Cource = () => {
    
  return (
   <> 
   <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center space-y-10'>
            <h1 className='text-2xl'>We are delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quo recusandae iure blanditiis rerum? Itaque repellendus iste expedita libero corporis dolore a? Dolor expedita numquam, voluptas porro, iure quia quidem quas possimus, omnis aliquid accusamus doloremque consequatur inventore saepe quaerat!</p>
            <Link to="/"><button className='bg-pink-500 rounded-md px-6 py-2 text-white mt-10 hover:bg-red-700'>Back</button></Link>
      </div>
      <div className='mt-4 grid grid-cols-1 md:grid-cols-4'>
     
  {
      list.map((item)=>(
            <Card item={item} key={item.id}/>
      ))
  }

      </div>
   </div>
   </>
  )
}

export default Cource
