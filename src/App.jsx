import { useState } from 'react'
import './App.css'
import {Link, NavLink   } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
