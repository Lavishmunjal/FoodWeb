import React, { useContext, useEffect } from 'react'
import { IoFastFood } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
   const {input, setInput, selectedCategory, setSelectedCategory, showcard, setShowcard} = useContext(dataContext)

   useEffect(() => {
     // You can perform any side effects here when input changes
     const filteredItems = food_items.filter((item) =>
       item.food_name.toLowerCase().includes(input.toLowerCase())
     );
     setSelectedCategory(filteredItems);
   }, [input]);
  //  console.log(input);
  //  console.log(setInput);
   const handleInputChange = (e) => {
     setInput(e.target.value);
   };
   const cartItems = useSelector((state) => state.cart.items);
   console.log(cartItems);


  return (
    <div className='w-full h-[100px] flex justify-between items-center px-6 md:px-10 bg-blue-300 sticky top-0 z-50'>
      {/* Logo */}
      <div className='w-[60px] h-[60px] bg-white rounded-3xl flex items-center justify-center shadow-md'>
        <IoFastFood size={30} className='text-green-600' />
      </div>

      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className='w-[45%] h-[60px] bg-white flex gap-5 px-5 items-center rounded-2xl shadow-md md:w-[60%]'>
        <FaSearch size={20} className='text-green-600' />
        <input
          type="text"
          placeholder='Search food'
          className='w-full outline-none text-[16px] md:text-[20px] border-b-2 border-green-600 focus:border-green-700 transition-colors duration-200'

          onChange={handleInputChange}
          value={input}
        />
      </form>

      {/* Cart Icon */}
      <div className='w-[60px] h-[60px] bg-white rounded-3xl flex items-center justify-center shadow-md relative' onClick={()=> setShowcard(true)}>
        <span className='absolute top-0 right-3 font-semibold text-sm text-red-600'>{cartItems.length}</span>
        <FaShoppingCart  size={30} className='text-green-600 cursor-pointer' />
      </div>
    </div>
  )
}

export default Nav
