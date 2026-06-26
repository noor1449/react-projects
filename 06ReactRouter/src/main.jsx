import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Layout from './layout.jsx'
import Contact from './components/Contact/contact.jsx'
import  User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { GithubInfoLoader } from './components/Github/Github.jsx'
/*const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    // FIXED: Changed '=' to ':'
    children: [ 
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
  }
])*/
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='user/:id' element={<User/>}/>
    <Route 
    path='/github' 
    element={<Github/>}
    loader={GithubInfoLoader}/>
  </Route>
)) 

// FIXED: Using the direct imports 'createRoot' and 'StrictMode'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)