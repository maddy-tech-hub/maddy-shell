import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
const Home = () => {return 'Hello Welcome to Home Page.'};
const About = () => { return 'Hello welcome to About page.'}
function Routers() {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to='/'>Home</Link><br/>
      <Link to='/about'>About</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default Routers