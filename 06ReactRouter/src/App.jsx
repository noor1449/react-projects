import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
    <><Header/>
    <Footer/>
    <Home/>
    </>
)