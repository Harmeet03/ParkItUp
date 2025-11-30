import { useEffect, useState } from 'react'
import Navbar from '../../components/Admin/Navbar'
import { allBookings } from '../../services/allUserAPI'

const Bookings = () => {

    const [data, setData] = useState('')

    const fetchBookings = async () => {
        try{
            const res = await allBookings()
            setData(res.all_bookings)
        }
        catch(e){
            console.error('Unable to fetch all users and their bookings')
        }
    }

    useEffect(() => {
        fetchBookings()
    }, [])

    return (
        <div className="bg-black w-full h-screen flex">
            <div className="bg-gray-900 w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="items-center text-center">
                    <p className="text-2xl sm:text-4xl text-white"> BOOKINGS </p>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                    <table className="m-auto w-full">
                            <thead>
                                <tr className="flex text-xl text-white sm:text-4xl py-8">
                                    <th className="m-auto"> Username </th>
                                    <th className="m-auto"> Slot </th>
                                    <th className="m-auto"> Date </th>
                                    <th className="m-auto"> Time </th>
                                </tr>
                            </thead>
                            <tbody>
                                <div className="bg-black text-white py-4 rounded-2xl overflow-y-scroll h-[50vh]">
                                    {data && data.length > 0 ? (
                                        data.map(d => (
                                            d.bookedSlots.map((b, index) => (   
                                                <tr key={`${d._id} - ${index}`} className="flex text-sm sm:text-xl py-8">
                                                    <td className="m-auto px-1"> {d.username} </td>
                                                    <td className="m-auto px-1"> P{b.slot.slotNumber} </td>
                                                    <td className="m-auto px-1"> {new Date(b.time).toLocaleDateString()} </td>
                                                    <td className="m-auto px-1"> {new Date(b.time).toLocaleTimeString()} </td>
                                                </tr>
                                            ))
                                        ))
                                    ) : (
                                        <div className='text-center flex flex-cols items-center justify-center text-white text-xl h-[40vh]'>
                                            <p> No bookings yet </p>
                                        </div>
                                    )}
                                </div>
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Bookings