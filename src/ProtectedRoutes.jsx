import { Navigate, Outlet } from "react-router-dom";
import React from 'react'
import { isAuth } from "./Pages/Login";

export default function ProtectedRoutes() {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
