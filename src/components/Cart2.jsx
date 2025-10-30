import React from 'react'
import { RiDeleteBin5Fill } from "react-icons/ri"
import { useDispatch } from 'react-redux';
import { decrementQty, incrementQty, removeItem } from '../redux/CartSlice';
import { toast } from 'react-toastify';

const Cart2 = ({ id, name, image, price, qty }) => {

    const dispatch = useDispatch();
  return (
    <div className="w-full h-[120px] p-2 shadow-lg flex justify-between items-center mb-5 rounded-xl bg-white">
      {/* Left */}
      <div className="w-[60%] h-full flex gap-5">
        <div className="w-[50%] h-full overflow-hidden rounded-2xl">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-3">
          <div className="text-lg text-gray-600 font-semibold">{name}</div>
          <div className="w-[110px] h-[40px] bg-slate-400 flex items-center justify-between rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-200 text-xl">
            <button onClick={()=>dispatch(decrementQty(id))}
            
             className="w-[30%] h-full bg-white text-green-400 hover:bg-gray-200">-</button>
            <span className="w-[40%] h-full bg-slate-300 flex justify-center items-center">{qty}</span>
            <button onClick={()=>dispatch(incrementQty(id))} className="w-[30%] h-full bg-white text-green-400 hover:bg-gray-200">+</button>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col justify-start items-end gap-4">
        <span className="text-lg text-green-700 font-semibold">
          Rs {price * qty}
        </span>
        <RiDeleteBin5Fill
          size={25}
          onClick={()=>{dispatch(removeItem(id)); toast.success(`Removed ${name} from cart`, {
            autoClose: 200,
          }) }}
          className="text-red-600 ml-5 cursor-pointer hover:text-black"
        />
      </div>
    </div>
  )
}

export default Cart2
