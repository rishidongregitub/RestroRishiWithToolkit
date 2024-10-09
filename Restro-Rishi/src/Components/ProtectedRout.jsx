import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {PropagateLoader} from 'react-spinners'

const ProtectedRoute = ({element}) => {
    const [loadding, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    const cartItems = useSelector((state) => state.cart.cart);
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            {loadding ? 
                <>
                    <h3 className="font-bold text-gray-800 m-3">Cart Empty, Redirecting...</h3>
                    <PropagateLoader color="#36d7b7" />
                </>
            :
                cartItems.length > 0 ? element : <Navigate to="/" />}
        </div>
    )
}
export default ProtectedRoute;
