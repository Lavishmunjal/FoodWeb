import React from 'react'
import Nav from '../components/Nav'
import { Category } from '../Category'
import Cart from '../components/Cart'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx"
import Cart2 from '../components/Cart2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const Home = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    input,
    setInput,
    showcard,
    setShowcard
  } = React.useContext(dataContext)

  const items = useSelector((state) => state.cart.items)

  // Filter categories
  const filter = (category) => {
    if (category === "All") {
      setSelectedCategory(food_items)
    } else {
      const filteredItems = food_items.filter(
        (item) => item.food_category === category
      )
      setSelectedCategory(filteredItems)
    }
  }

  const totalItem = items.reduce((total, item) => total + item.price * item.qty, 0)
  const tax = totalItem * 0.05
  const delivery = 30
  const grandTotal = totalItem + tax + delivery

  return (
    <div className="bg-blue-300 min-h-screen w-full pb-10">
      <Nav />

      {/* Category Section */}
      {!input && (
        <div className="mt-10 flex flex-wrap justify-center items-center gap-6">
          
          {Category.map((item) => (
            <div
              key={item.name}
              className="w-[140px] h-[150px] bg-white rounded-2xl p-5 flex flex-col items-start gap-5 shadow-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              onClick={() => filter(item.name)}
            >
              <div>{item.image}</div>
              <div className="text-[20px] font-semibold text-gray-700">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Food Items */}

      {selectedCategory.length > 0 ? (
  <div className="mt-10 flex flex-wrap justify-center gap-6">
    {selectedCategory.map((food) => (
      <Cart
        key={food.id}
        name={food.food_name}
        image={food.food_image}
        id={food.id}
        price={food.price}
        type={food.food_type}
      />
    ))}
  </div>
) : (
  <p className="text-gray-500 text-center mt-10">No items found</p>
)}


      {/* Backdrop when cart opens */}
      {showcard && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setShowcard(false)}
        ></div>
      )}

      {/* Cart Drawer */}
      <div
        className={`w-full md:w-[40vw] h-screen fixed top-0 right-0 bg-white shadow-xl p-5 z-50 transition-all duration-300 overflow-auto ${
          showcard ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="w-full flex justify-between items-center mb-5">
          <span className="text-lg font-semibold text-green-600">
            Order Items
          </span>
          <RxCross2
            size={30}
            className="text-red-600 cursor-pointer hover:text-black"
            onClick={() => setShowcard(false)}
          />
        </header>

        {/* Cart Items */}
        {items && items.length > 0 ? (
          <div className="overflow-y-auto h-[90%] pr-3">
            {items.map((item) => (
              <Cart2
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
                qty={item.qty}
              />
            ))}

            {/* Totals Section */}
            <div className="w-full border-t-2 border-gray-400 mt-5 p-8 flex justify-between items-center gap-4 flex-col">
              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Total:</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {totalItem}</span>
              </div>

              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Delivery fees:</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {delivery}</span>
              </div>

              <div className='w-full flex justify-between items-center'>
                <span className='text-lg text-gray-600 font-semibold'>Tax:</span>
                <span className='text-green-400 font-semibold text-lg'>Rs {tax.toFixed(2)}</span>
              </div>

              <div className='w-full flex justify-between items-center border-t-2 border-gray-400 pt-4'>
                <span className='text-xl text-gray-800 font-bold'>Grand Total:</span>
                <span className='text-green-700 font-bold text-xl'>Rs {grandTotal.toFixed(2)}</span>
              </div>

              <button className='w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200'
              onClick={()=>(toast.success("Order placed"))}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 text-center mt-10">No items in cart</p>
        )}
      </div>
    </div>
  )
}

export default Home
