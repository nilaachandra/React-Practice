import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout