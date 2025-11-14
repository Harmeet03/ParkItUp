import { useState } from "react";
import { useEffect } from "react";
import { profile } from "../services/profileAPI";
import { Navigate } from "react-router";

const PublicRoute = ({ children }) => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        profile()
            .then(() => {
                setUser(true)
                console.log('User authenticated, redirecting to dashboard');
                setLoading(false);
            })
            .catch(() => {
                setUser(false)
                console.log('User not authenticated, staying on public route');
                setLoading(false);
            })
    }, [])

    if(loading){
        return(
            <div className="text-4xl flex flex-col justify-center items-center h-screen">
                <p> Loading... </p>
            </div>
        )
    }
    
    if(user){
        return <Navigate to="/dashboard" replace />
    }
    
    return children;
}   

export default PublicRoute