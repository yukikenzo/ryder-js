import { Navigate, Outlet } from "react-router-dom";
import React from 'react'

const isAuth = true;

export default function ProtectedRoutes() {
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
