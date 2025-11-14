import { useEffect, useState } from 'react'

const NetworkStatus = () => {
    const [online, setOnline] = useState(navigator.onLine)  

    useEffect(() => {
        const handleOnline = () => {
            setOnline(true)
        }

        window.addEventListener("online", handleOnline)
        
        const handleOffline = () => {
            setOnline(false)
        }
        
        window.addEventListener("offline", handleOffline)

        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }
    }, [])

        if(online){
                return null
        }

        return(
            <div className='text-center text-xl bg-red-600 text-white p-2'>
                <p> No internet connection! </p>
            </div>
        )
}

export default NetworkStatus