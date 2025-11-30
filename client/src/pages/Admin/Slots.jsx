import { useState, useEffect } from 'react'
import Navbar from '../../components/Admin/Navbar'
import { booked, unbook } from '../../services/bookedAPI'

const Slots = () => {
    const [data, setData] = useState('')

    const fetchBookedData = async () => {
        try{
            const res = await booked()
            setData(res.bookedSlots)
        }
        catch(e){
            console.error('Unable to fetch booked slots')
        }
    }

    const removeSlot = async (slotId) => {
        try{
            const res = await unbook(slotId)
            console.log('Slot unbooked')
            fetchBookedData()
        }
        catch(e){
            console.error('Unable to unbook slot', e)
        }
    }

    useEffect(() => {
        fetchBookedData()
    }, [])

    return (
        <div className="bg-black w-full h-screen flex">
            <div className="bg-gray-900 w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="items-center text-center">
                    <p className="text-2xl sm:text-4xl text-white"> MANAGE SLOTS </p>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                        <table className="m-auto w-full">
                            <thead>
                                <tr className="flex text-sm text-white sm:text-2xl py-8">
                                    <th className="m-auto"> Slot </th>
                                    <th className="m-auto"> Date </th>
                                    <th className="m-auto"> Time </th>
                                    <th className="m-auto"> U.Name </th>
                                    <th className="m-auto"> Edit </th>
                                </tr>
                            </thead>
                            <tbody>
                                <div className="bg-black text-white py-4 rounded-2xl overflow-y-scroll h-[50vh]">
                                    {data && data.length > 0 ? (
                                        data.map(d => (
                                            <tr key={d._id} className="flex text-xs sm:text-xl py-8">
                                                <td className="m-auto px-1"> {d.slotNumber} </td>
                                                <td className="m-auto px-1"> {new Date(d.updatedAt).toLocaleDateString()} </td>
                                                <td className="m-auto px-1"> {new Date(d.updatedAt).toLocaleTimeString()} </td>
                                                <td className="m-auto px-1"> {d.bookedBy.username} </td>
                                                <td className="m-auto text-xs sm:text-lg bg-red-700 cursor-pointer p-2 rounded-xl hover:scale-90 transition" onClick={() => removeSlot(d._id)}> Remove </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <div className='flex flex-cols justify-center items-center text-center h-[45vh] text-2xl'>
                                            <p> No slots currently booked yet! </p>
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

export default Slots