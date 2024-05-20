import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import UserProfile from './components/UserProfile/UserProfile';
import HouseDetails from './components/HouseDetails/HouseDetails';
import Login from './components/Login/Login';
import { RiRegisteredFill } from 'react-icons/ri';
import Register from './components/Register/Register';
import AuthProvider from './components/AuthProvider/AuthProvider';
import About from './components/About/About';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/update",
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: "/user",
        element: <UserProfile></UserProfile>
      },
      {
        path: "/about",
        element: <ProtectedRoute>
          <About></About>
        </ProtectedRoute>
      },
      {
        path: "/job/:id",
        element: <HouseDetails></HouseDetails>,
        loader: () => fetch('/jobs.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
