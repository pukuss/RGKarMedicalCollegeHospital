import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './Components/Pages/Home.jsx'
import Addmition from './Components/Pages/Addmition.jsx'
import Academic from './Components/Pages/Academic.jsx'
import Registration from './Components/Pages/Registration.jsx'


// import Enrolment from './Components/Pages/Sub_Page/subpage.js'
import Enrolment from './Components/Pages/Sub_Page/Enrolment.jsx'
import Register from './Components/Pages/LOGINCOMP/Register.jsx'
import Login from './Components/Pages/LOGINCOMP/login.jsx'



const router = createBrowserRouter([
  {path : "/",
    element : <Layout/>,
    
    children: [{
      // loader:useGithubApi,
      path: "",
      element: <Home />
    },
    {
      path: "register",
      element: <Register />
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "addmition",
      element: <Addmition />
    },
      {
      path: "addmition/Enroll",
      element: <Enrolment />
      },
    
    {
      path: "Academic",
      element: <Academic />
    },
    {
      path: "Registration",
      element: <Registration />
    }
  ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
