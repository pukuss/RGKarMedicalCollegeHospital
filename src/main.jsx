import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Pages/Home.jsx'





const router = createBrowserRouter([
  {path : "/",
    element : <Layout/>,
    
    children: [{
      path: "",
      element: <Home />
    },
    {
      path: "Addmition" 
    }
  ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
