import React from 'react'

const CategoryMenu = () => {
  return (
    <div className='mx-6'>
        <h3>Find the best food</h3>
        <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-hidden">
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>All</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Lunch</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Breakfast</button>
            <button className='px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white'>Dinner</button>
        </div>
    </div>
  )
}

export default CategoryMenu