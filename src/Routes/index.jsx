import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../Pages/Login/Login";
import Register from '../Pages/Register/Register'
import Home from "../Pages/Home/Home";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";

const Routes = () => {
  const { token, userDetail } = useAuth();




  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Login />
    },

    {
      path: "/register",
      element: <Register />
    },

    {
      path: "/forgot-password",
      element: <ForgotPassword />
    },

    // {
    //   path: "/forgot-password",
    //   element: <ForgotPassword />
    // },

    // {
    //   path: "/reset-password/:uid/:token",
    //   element: <ResetPassword />
    // },


  ];
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />
    },

 
    // {
    //   path: "/forgot-password",
    //   element: <ForgotPassword />
    // },

    // {
    //   path: "/reset-password/:uid/:token",
    //   element: <ResetPassword />
    // },


  ];


  const router = createBrowserRouter([

    ...(!token  ? routesForNotAuthenticatedOnly : []),
    ...(token  ? routesForAuthenticatedOnly : []),

    
    
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;