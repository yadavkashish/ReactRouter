import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'

import Contact from './components/Contact'
import About from './components/About'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import User from './components/user'
import Github from './components/Github'
import { githubInfoLoader } from './components/Github'
import Home from './components/home'
const router = createBrowserRouter(
//  [ {
//   path:'/',
//   element: <Layout/>,
//   children:[{
//     path:"",
//     element:<Home/>
//   },
//   {
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },
  
// ]
//   } 
  // can also be written as=>

createRoutesFromElements(
  <Route path ='/' element = {<Layout/>}>
   

    <Route path='' element ={<Home/>}/>
    <Route path='about' element ={<About/>}/>
    <Route path='contact' element ={<Contact/>}/>
    <Route path='user/:userid' element ={<User/>}/>
    <Route 
    loader={githubInfoLoader}

    
    path='github'
     element ={<Github/>}/>

  </Route>
)
  


// ]
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>

  </StrictMode>,
)
