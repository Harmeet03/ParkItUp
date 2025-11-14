import { useState } from "react";
import { useEffect } from "react";
import { profile } from "../services/profileAPI";
import { Navigate } from "react-router";

const AdminRoute = ({children}) => {
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        profile()
            .then((res) => {
                if(res?.role === 'admin'){
                    setAdmin(true);
                    console.log('Admin access granted');
                    setLoading(false);
                }
                else{
                    setAdmin(false);
                    setLoading(false);
                    console.log('You are not an Admin');
                }
            })
            .catch(() => {
                setAdmin(false);
                setLoading(false);
                console.log('Unable to fetch user details');
            })
    }, [])

    if(loading){
        return(
            <div className="text-4xl flex flex-col justify-center items-center h-screen">
                <p> Loading... </p>
            </div>
        )
    }
    
    if(!admin){
        return <Navigate to="/dashboard" replace />
    }
    
    return children;
}   

export default AdminRoute