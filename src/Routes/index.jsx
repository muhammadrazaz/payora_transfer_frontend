import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../Pages/Login/Login";
import Register from '../Pages/Register/Register'
import Home from "../Pages/Home/Home";
import PayBill from "../Pages/PayBill/PayBill";
import ForgotPassword from "../Pages/ForgotPassword/ForgotPassword";
import AuthPage from "../Pages/AuthPage/AuthPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";

const Routes = () => {
  const { token, userDetail } = useAuth();




  // Define routes accessible only to non-authenticated users

  const routesForAll = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/pay-bills",
      element: <PayBill />
    },
  ]
  const routesForNotAuthenticatedOnly = [

    {
      path: "/login",
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
  const routesForAuthenticatedOnly = 
  
  [
    {
      path: "/profile",
      element: (<ProtectedRoute>
        <ProfilePage/>
      </ProtectedRoute>)
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

  console.log(token,'==================')
  const router = createBrowserRouter([
    ...routesForAll,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...(token ? routesForAuthenticatedOnly : []),



  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;