import Navbar from '../../components/User/Navbar'
import { useNavigate } from 'react-router'
import { slots } from '../../services/slotAPI.js'
import { useEffect, useState } from 'react'
import razorpaySDK from '../../utils/razorpaySDK.jsx'

const SlotBooking = () => {
    const to = useNavigate()
    
    const [slotData, setSlotData] = useState('')
    const [loading, setLoading] = useState(true)
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const currentDate = new Date().toLocaleDateString();



    const fetchSlots = async () => {
        try{
            const res = await slots()
            setSlotData(res)
            setLoading(false)
        }
        catch(e){
            console.log('Error fetching slots:', e);
            setLoading(false)
        }
    }

    const handleBook = async (slotId, slotNumber) => {
        try{
            await razorpaySDK({slotId, fetchSlots, to, currentDate, currentTime, slotNumber})
        }        
        catch(e){
            console.log('Error initiating payment:', e);
        }
    }

    useEffect(() => {
        fetchSlots(),
        setTime(currentTime)
        setDate(currentDate)
    }, [])

    if(loading){
        return (
            <div className="bg-gray-200 w-full h-screen flex">
                <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5 flex items-center justify-center">
                    <p className="text-2xl sm:text-4xl"> Loading Slots... </p>
                </div>
            </div>
        )
    }

    return(
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">
                
                <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-2xl sm:text-4xl"> SELECT A PARKING SLOT </p>
                    <div className='flex gap-4 text-xs sm:text-sm sm:gap-8'>
                        <p> Time: {time} </p>
                        <p> Date: {date} </p>
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-8 md:gap-10">
                    
                    <Navbar/>

                    <div className="w-full p-5 bg-gray-100 m-auto rounded-xl overflow-y-scroll h-[64vh]">
                        <div className="p-5 text-8xl rounded-xl m-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                            {slotData.map((slot) => (
                                <span key={slot._id} onClick={() => !slot.isBooked && handleBook(slot._id, slot.slotNumber)} className={`p-4 rounded-xl text-center cursor-pointer transition ${slot.isBooked ? 'hover:cursor-not-allowed bg-cyan-600 text-white' : 'hover:cursor-pointer bg-white hover:scale-90 hover:bg-cyan-200'}`}>
                                    P<span className='text-2xl'>{slot.slotNumber}</span>
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlotBooking