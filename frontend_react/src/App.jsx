import React, { useEffect } from 'react'
import HomePage from './pages/HomePage'
import { Route, Routes, useLocation } from 'react-router-dom'
import SignUp from './pages/SignUp'
import LoginPage from './pages/LoginPage';
import SamplePage from './pages/SamplePage';

function App() {

  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() =>{
      window.scrollTo(0, 0)
    }, [pathname])
    return null;
  }

  return (
    <>
    <ScrollToTop />
    <Routes location={location} key={location.pathname}>
      <Route index element={ <HomePage /> } />
      <Route path='/SignUp' element={ <SignUp /> } />
      <Route path='/LogIn' element={ <LoginPage /> } />
      <Route path='/sample' element={ <SamplePage /> } />
    </Routes>
    </>
  )
}

export default App
