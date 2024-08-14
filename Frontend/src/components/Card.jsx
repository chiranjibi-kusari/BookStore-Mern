import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className='mt-10 p-3'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 className='dark:bg-slate-900 dark:text-white' " >
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline p-4 cursor-pointer">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer p-4">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Card