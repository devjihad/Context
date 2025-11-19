import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Maiin from "./Main/Maiin"
import Login from "./LoginResister/Login"
import Resister from "./LoginResister/Resister"
import Dashboard from "./Dashboard"
import Privateroute from "./Privateroute"
import Reset from "./LoginResister/Reset"


function App() {
  const router  =createBrowserRouter([
    {
      path:'/',
      element:<Maiin></Maiin>,
      children:[
        {
          path:'/Login',
          element:<Login></Login>
        },
        {
          path:'/Resister',
          element:<Resister></Resister>
        },
        {
          path:'/Dashboard',
          element:<Privateroute><Dashboard></Dashboard></Privateroute>
        },
        {
          path:'/Reset',
          element:<Reset></Reset>
        }
      ]
    }
  ])
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App
