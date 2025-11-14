import Navbar from "../../components/User/Navbar"
import { profile } from '../../services/profileAPI'
import { useEffect, useState } from 'react'
import { myBookings } from "../../services/myBookingsAPI.js"


const History = () => {
    
    const [data, setData] = useState('')
    const [bookings, setBookings] = useState('')
    
    const getProfile = async () => {
        try{
            const res = await profile()
            setData(res)
        }
        catch(e){
            console.error('Error fetching profile:', e);
        }
    } 

     const getMyBookings = async () => {
        try{
            const res = await myBookings()
            setBookings(res.bookings)
        }
        catch(e){
            console.error('Error fetching my bookings:', e);
        }
    }

    useEffect(() => {
        getProfile(),
        getMyBookings()
    }, [])

    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-2xl sm:text-4xl"> BOOKING HISTORY </p>
                    <div className="text-sm cursor-pointer sm:text-xl flex gap-2 items-center"> 
                        <span className="fa fa-user bg-cyan-100 p-2 rounded-full"/>
                        <p> {data.username} </p> 
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">

                    <Navbar/>

                    <table className="m-auto w-full">
                        <thead>
                            <tr className="flex text-xl sm:text-4xl py-8">
                                <th className="m-auto"> Slot </th>
                                <th className="m-auto"> Date </th>
                                <th className="m-auto"> Time </th>
                            </tr>
                        </thead>
                        <tbody>
                            <div className="bg-gray-100 py-4 rounded-2xl overflow-y-scroll h-[55vh]">
                            {
                                bookings && bookings.length > 0 ? (
                                        bookings.map(b => (
                                            <tr key={b.slot._id} className="flex text-xl sm:text-4xl py-8">
                                                <td className="m-auto px-1"> P{b.slot.slotNumber} </td>
                                                <td className="m-auto px-1"> {new Date(b.time).toLocaleDateString()} </td>
                                                <td className="m-auto px-1"> {new Date(b.time).toLocaleTimeString()} </td>
                                            </tr>
                                    ))
                                ) : (
                                    <div className="bg-gray-100 py-4 rounded-2xl text-center flex flex-col items-center justify-center text-2xl overflow-y-scroll h-[55vh]"> 
                                        <p> No bookings made yet. </p>
                                    </div>
                                )
                            }
                            </div>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default History