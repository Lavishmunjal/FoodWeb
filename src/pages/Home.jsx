import React from 'react'
import Nav from '../components/Nav'
import { Category } from '../Category'
import Cart from '../components/Cart'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";


const Home = () => {
  const {selectedCategory, setSelectedCategory, input, setInput, showcard, setShowcard} = React.useContext(dataContext);

  const filter = (category) => {
    if (category === "All") {
      setSelectedCategory(food_items);
      
    }
    else {
      const filteredItems = food_items.filter((item) => item.food_category === category);
      setSelectedCategory(filteredItems);
    }
  }

  return (
    <div className='bg-blue-300 min-h-screen w-full pb-10'>
      <Nav />
      {!input ? <div className='mt-10 flex flex-wrap justify-center items-center gap-6'>
        {Category.map((item) => (
          <div
            key={item.name}
            className='w-[140px] h-[150px] bg-white rounded-2xl p-5 flex flex-col items-start gap-5 shadow-md hover:scale-105 transition-transform duration-200'
          onClick={() => filter(item.name)}
          >
            <div>{item.image}</div>
            <div className='text-[20px] font-semibold text-gray-700'>{item.name}</div>
          </div>
        ))}
      </div> : null}
      

      {/* Cart Section */}
      <div className='mt-10 flex flex-wrap justify-center gap-6'>
          {selectedCategory.map((food)=>{
            return <Cart key={food.id} name={food.food_name} image={food.food_image} id={food.id} price={food.price} type={food.food_type} />
          })}
        
      </div>

         <div className={`w-[40vw] h-screen fixed top-0 right-0 bg-white shadow-xl p-5 z-50 transition-all duration-300 ${showcard ? "translate-x-0" : "translate-x-full"}` } >
  <header className='w-full flex justify-between items-center'>
    <span className='text-lg font-semibold text-green-600'>Order Items</span>
    <RxCross2 size={30} className='absolute top-5 right-5 text-red-600 cursor-pointer hover:text-black' onClick={()=> setShowcard(false)} />
  </header>
</div>
        
    </div>
  )
}

export default Home
