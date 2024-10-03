import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import ItemCard from './ItemCard'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true)
  const cartItems = useSelector((state) => state.cart.cart)
  const totalQnty = cartItems.reduce((totalQnty, item)=> totalQnty + item.qnty, 0);
  const totalPrice = cartItems.reduce((totalPrice, item)=> totalPrice + item.qnty * item.food.price, 0);

  return (
    <>
      <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50`}>
        <div className="flex justify-between items-center my-3">
          <span className='text-xl font-bold text-gray-800'>My Order</span>
          <IoMdClose onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-2xl rounded-md  hover:text-red-300 hover:border-red-300 cursor-pointer' />
        </div>
        {cartItems.length > 0 ?  cartItems.map((item) => {
          const { id, name, price, img} = item.food;
          const qnty = item.qnty;
          console.log(item.food)
          return (
            <ItemCard
              key={id}
              id={id}
              name={name}
              price={price}
              img={img}
              qnty={qnty}
            />
          )
        }) : <h2 className='text-center text-xl font-bold text-gray-800'>Your cart is empty</h2> }
        <div className="absolute bottom-0">
          <h3 className='font-semibold text-gray-800 '>Items : {totalQnty}</h3>
          <h3 className='font-semibold text-gray-800 '>Total Amount : {totalPrice}</h3>
          <hr className='w-[90vw] lg:w-[18vw] py-2' />
          <button className='bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout</button>
        </div>
      </div>
      <FaShoppingCart onClick={() => setActiveCart(!activeCart)} className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${totalQnty > 0 && "animate-bounce delay-500 transition-all"}  `}/>
    </>
  )
}

export default Cart
