import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  const [loadding, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  //Navigate to Main page
  const handleChangeBackToStore=()=>{
    navigate('/')
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      {loadding ? <PropagateLoader color='#36d7b7' /> :
        <>
          <div className="">
          <h2 className="tex-3xl font-semibold mb-4 text-center">Order Successfull</h2>
          <p className="">Your order has been Successfull placed</p>
          </div>
          <div className="">            
            <button onClick={handleChangeBackToStore} className='p-2 mt-4 text-white bg-green-500 hover:bg-green-600 rounded text-md'>Back to Store</button>
          </div>
        </>
      }
    </div>
  )
}

export default Success