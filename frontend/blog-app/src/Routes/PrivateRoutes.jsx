import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";
// import { UserContext } from "../context/userProvider";
const PrivateRoutes = ({allowedRoles}) => {
  const { user, loading } = useContext(UserContext);

 if (loading) {
   return <div>Loading...</div>; 
 }

 if (!user) {
   return <Navigate to="/" replace />;
 }

 if (!allowedRoles.includes(user.role)) {
   return <Navigate to="/" replace />;
 }

 return <Outlet />;
}

export default PrivateRoutes
