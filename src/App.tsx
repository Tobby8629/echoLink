// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { lazy } from 'react';
import Navbar from './components/Layout/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Blog_Page = lazy(() => import('./pages/[Blog_Page]'));

function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route  path={"/"} element={<Home />} />
      <Route  path={"/blog"} element={<Blog />} />
      <Route  path={"/blog/:id"} element={<Blog_Page />} />
     </Routes>
    </>
  )
}

export default App
