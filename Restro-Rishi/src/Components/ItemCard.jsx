import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { decreamentQnty, increamentQnty, removeFromCart } from '../redux/slices/CartSlice';


const ItemCart = ({id,name,qnty,price,img}) => {
        const dispatch = useDispatch();
    
    return (
        <div className="flex gap-2 shadow-md rounded-lg p-2 mb-4">
            <MdDelete onClick={()=> dispatch(removeFromCart(id))} className='absolute right-7 text-gray-600 cursor-pointer'/>
            <img src={img} alt="" className='w-[50px] h-[50px]' />
            <div className="leading-5">
                <h2 className='font-bold text-gray-800'>{name}</h2>
                <div className="flex justify-between">
                    <span className="text-green-500 font-bold">₹{price}</span>
                    <div className="flex justify-center items-center gap-2 absolute right-7">
                        <AiOutlineMinus onClick={()=> qnty > 1 ? dispatch(decreamentQnty({id})): qnty = 0} className='border-2 border-gray-60 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-in-out cursor-pointer' />
                        <span>{qnty}</span>
                        <AiOutlinePlus onClick={()=> qnty >= 1 ? dispatch(increamentQnty({id})) : qnty = 0} className='border-2 border-gray-60 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-in-out cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCart