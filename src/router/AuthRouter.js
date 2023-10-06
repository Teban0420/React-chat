import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

export const AuthRouter = () => {

    return(       
        <Routes>            
            <Route  path="/login" Component={<LoginPage />} />
            <Route  path="/register" Component={<RegisterPage />} />

            <Route path="*" element={<Navigate to="/auth/login" />} />
        </Routes>
       
    )
}

