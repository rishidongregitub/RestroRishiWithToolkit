import React from 'react'
import FoodCard from './FoodCard.jsx'
import FoodData from '../Data/FoodData.js'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

const FoodItems = () => {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state)=> state.search.search)
  const handleToast = (name) => {
    toast.success(`Added ${name} to cart`)
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          
          }
        }).map((food) => (
          <FoodCard key={food.id} food={food} handleToast={handleToast} />
        ))}
      </div>
    </>
  )
}

export default FoodItems;