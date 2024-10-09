import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Success from './Pages/Success';
import ErrorPage from './Pages/ErrorPage';
import ProtectedRoute from './Components/ProtectedRout';
   
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/success' element={<ProtectedRoute element={<Success/>}/>}></Route>
        <Route path='*' element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App