import  React from "react";
import {  BrowserRouter as Router,
            Routes,
            Route, Navigate } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { ChatPage } from "../pages/ChatPage";

export const AppRouter = () => {

    return(        
       <Router>
            <div> 
                <Routes>                
                    <route path="/auth" Component={<AuthRouter />} /> 
                    <Route exact path="/" Component={<ChatPage />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>  
       </Router>
       
    )
}