import React from 'react'
import {AiFillStar} from 'react-icons/ai';


const FoodCart = ({food}) => {
    return (
        <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2'>
            <img src={food.img} alt={food.name} className='w-auto -[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />
            <div className="text-sm flex justify-between">
                <h2>{food.name}</h2>
                <span className='text-green-500'>₹{food.price}</span>
            </div>
            <p className="text-sm font-normal">{food.desc.slice(0,50)}...</p>
            <div className="flex justify-between">
                <span className="flex justify-center items-center">
                    <AiFillStar className='mr-1 text-yellow-400'/>{food.rating}
                </span>
                <button className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
            </div>
        </div>
    )
}

export default FoodCart