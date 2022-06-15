import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

export default function ProtectedRoutes({isAuth}) {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
