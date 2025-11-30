import { useNavigate } from 'react-router'
import Navbar from '../../components/Admin/Navbar'
import { stats } from '../../services/statsAPI'
import { useState, useEffect } from 'react'

const AdminDashboard = () => {

    const [data, setData] = useState('')

    const slotData = async () => {
        try{
            const res = await stats()
            setData(res)
        }
        catch(e){
            console.error('Unable to fetch slots data', e)
        }
    }

    useEffect(() => {
        slotData()
    }, [])

    return (
        <div className="bg-black w-full h-screen flex">
            <div className="bg-gray-900 w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="items-center text-center">
                    <p className="text-2xl sm:text-4xl text-white"> ADMIN DASHBOARD </p>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                    
                    <div className='w-full text-white grid sm:grid-cols-2 w-1/2 m-auto gap-8 overflow-y-scroll md:overflow-hidden h-[60vh] md:h-[70vh] lg:h-[70vh]'>
                        
                        <div className='text-center p-16 bg-black rounded-2xl'>
                            <div className='flex items-center gap-2 justify-center'>
                                <p className='text-4xl'><span className='fa fa-square'/></p>
                                <p className='text-2xl'> Total Slots </p>
                            </div>
                            <p className='text-6xl'> {data.totalSlots} </p>
                        </div>
                        
                        <div className='text-center p-16 bg-black rounded-2xl'>
                            <div className='flex items-center gap-2 justify-center'>
                                <span className='text-4xl'> ✓ </span> 
                                <p className='text-2xl'> Booked </p>
                            </div>
                            <p className='text-6xl'> {data.bookedSlots} </p>
                        </div>

                        <div className='text-center p-16 bg-black rounded-2xl'>
                            <div className='flex items-center gap-2 justify-center'>
                                <p className='text-4xl'><span className='fa fa-list'/></p> 
                                <p className='text-2xl'> Available </p>
                            </div>
                            <p className='text-6xl'> {data.availableSlots} </p>
                        </div>

                        <div className='text-center p-16 bg-black rounded-2xl'>
                            <div className='flex items-center gap-2 justify-center'>
                                <p className='text-4xl'><span className='fa fa-bar-chart'/></p> 
                                <p className='text-2xl'> Revenue </p>
                            </div>
                            <p className='text-6xl'> ₹{data.totalRevenue} </p>
                        </div>
                        
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard