import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root';
import Home from './Components/Home';
import Error from './Components/Error';
import DeshBoard from './Components/DeshBoard';
import BookDetail from './Components/BookDetail';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'products/:bookId',
        element:<BookDetail></BookDetail>

      },
      {
       path:'deshboard' ,
       element:<DeshBoard></DeshBoard>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
  </StrictMode>,
)
