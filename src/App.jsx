import React from 'react'
import Navbar from './components/Navbar.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Routes.jsx'

export default function App() {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
