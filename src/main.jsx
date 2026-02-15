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
import Login from './Components/Pages/LOGINCOMP/Login.jsx'
import InfeneraPlus from './Components/Pages/Sub_Page/InfeneraPlus.jsx'
import Doctor_page from './Components/Pages/Doctor_page.jsx'



const router = createBrowserRouter([
  {path : "/",
    element : <Layout/>,
    
    children: [{
      // loader:useGithubApi,
      path: "",
      element: <Home />
    },
    {
      path: "Infenera",
      element: <InfeneraPlus />
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
      path: "addmition/enroll",
      element: <Enrolment />
      },
    {
      path: "doctor",
      element: <Doctor_page />
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
