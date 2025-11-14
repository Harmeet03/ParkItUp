import { useEffect, useState } from 'react'
import Navbar from '../../components/User/Navbar'
import { profile } from '../../services/profileAPI'
import { logout } from '../../services/authAPI'
import { useNavigate } from 'react-router'

const Profile = () => {
    const to = useNavigate()

    const [data, setData] = useState('')

    const getProfile = async () => {
        try{
            const res = await profile()
            setData(res)
        }
        catch(e){
            console.error('Error fetching profile:', e);
        }
    } 

    useEffect(() => {
        getProfile()
    }, [])

    const logoutUser = async () => {
        try{
            const res = await logout()
            console.log('User Logged Out.')
            to('/')
        }
        catch(e){
            console.error('Error during logout:', e);
        }
    }

    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">

                <div className="flex flex-row items-center justify-between">
                    <p className="text-2xl sm:text-4xl"> PROFILE </p>
                    <div className="text-sm cursor-pointer sm:text-xl flex gap-2 items-center"> 
                        <span className="fa fa-user bg-cyan-100 p-2 rounded-full"/>
                        <p> {data.username} </p> 
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    
                    <Navbar/>

                    <div className="w-full p-5 bg-gray-100 m-auto rounded-xl">
                        <div className="bg-white p-5 rounded-xl sm:w-4/5 m-auto">
                            <div className="flex flex-col text-4xl sm:text-6xl flex gap-2 items-center justify-center"> 
                                <span className="fa fa-user bg-cyan-100 p-2 rounded-full p-10"/>
                                    {data ? (
                                        <div className='text-center flex flex-col gap-4'>
                                            <p className='text-xl sm:text-4xl font-bold'> {data.name} </p>
                                            <i><p className='text-sm sm:text-xl'> {data.username} </p></i>
                                            <i><p className='text-sm sm:text-xl'> {data.email} </p></i>
                                            <p className='text-sm sm:text-xl cursor-pointer p-2 rounded-xl hover:scale-90 transition bg-cyan-200' onClick={logoutUser}> <span className='fa fa-arrow-circle-o-left'/> Logout </p>
                                        </div>
                                    ) : (
                                        <div className='text-xl'>
                                            <p> Something went wrong! </p>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Profile