import React from 'react'
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";


const Cart = ({name, image, id, price, type}) => {
  return (
    <div className='w-[300px] h-[350px] bg-white mt-10 rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-105  flex flex-col gap-3 hover:borger-2 border-green-600'>
      <div className=''>
        <img src={image} alt="food item" className='w-full h-[200px] object-cover' />
      </div>
      <div className='p-3'>
        <div className='font-semibold text-gray-800 text-lg'>{name}</div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-green-800 text-lg mb-2 font-semibold'>Rs {price}</div>
            <div className='flex items-center gap-1 text-green-700 text-lg'>
                {type==='veg' ? <LuLeafyGreen/>:<GiChickenOven />}
          <span>{type}</span>

        </div>
        
        </div>
        <button className='w-[100%] mt-2  bg-green-600 text-white p-2 rounded-xl hover:bg-green-700 transition-colors duration-200'>add to dish</button> 
      </div>
      
    </div>
  )
}

export default Cart
