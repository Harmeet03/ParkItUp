import { useState } from "react";
import { useEffect } from "react";
import { profile } from "../services/profileAPI";
import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {
    const [redirect, setRedirect] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        profile()
            .then((res) => {
                setUser(res)
                console.log('User authenticated');
                setLoading(false);
            })
            .catch(() => {
                console.log('User not authenticated');
                setLoading(false);
                setUser(null)
            })
    }, [])

    if(loading){
        return(
            <div className="text-4xl flex flex-col justify-center items-center h-screen">
                <p> Loading... </p>
            </div>
        )
    }

    if(!user){
        return <Navigate to="/" replace />
    }

    if(user.role === 'admin'){
        return <Navigate to='/admin/dashboard' replace/>
    }
    
    return children;
}   

export default ProtectedRoute