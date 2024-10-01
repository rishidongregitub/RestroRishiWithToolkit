import React from 'react'
import FoodCard from './FoodCard.jsx'
import FoodData from '../Data/FoodData.js'
const FoodItems = () => {
  return (
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
      {FoodData.map((food)=>{
        return <FoodCard key={food.id} food={food}/>
      })}
    </div>
  )
}

export default FoodItems