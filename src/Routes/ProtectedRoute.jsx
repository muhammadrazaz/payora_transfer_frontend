import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const ProtectedRoute = ({children}) => {
    const { token,userDetail } = useAuth();
    const navigate = useNavigate()

    
    // Check if the user is authenticated
    if (!token || !userDetail) {
      // If not authenticated, redirect to the login page
      return <Navigate to="/" />;
    }

    return children;
    // If authenticated, render the child routes
    return <Outlet />;
  };