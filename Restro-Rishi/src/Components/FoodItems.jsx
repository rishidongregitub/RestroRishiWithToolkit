import React from 'react'
import FoodCard from './FoodCard.jsx'
import FoodData from '../Data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';

const FoodItems = () => {

  const handleToast =(name)=>{
    toast.success(`Added ${name} to cart`)
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {FoodData.map((food) => {
          return <FoodCard key={food.id} food={food}  handleToast ={handleToast}/>
        })}
      </div>
    </>
  )
}

export default FoodItems;