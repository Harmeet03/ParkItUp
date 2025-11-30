import { useState, useEffect } from 'react'
import Navbar from '../../components/Admin/Navbar'
import { getFeedback } from '../../services/feedbackAPI'

const Reports = () => {
    const [data, setData] = useState('')

    const feedback = async () => {
        try{
            const res = await getFeedback()
            setData(res.feedbacks)  
        }
        catch(e){
            console.error('Unable to fetch feedbacks', e)
        }
    }

    useEffect(() => {
        feedback()
    }, [])

    return (
        <div className="bg-black w-full h-screen flex">
            <div className="bg-gray-900 w-9/10 h-9/10 m-auto rounded-lg p-5">
                <div className="items-center text-center">
                    <p className="text-2xl sm:text-4xl text-white"> REPORTS </p>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                    <div className="w-full p-5 bg-black text-white m-auto rounded-xl overflow-y-scroll h-[65vh]">
                        <p className='text-4xl'> User Feedbacks </p>
                        
                        {data && data.length > 0 ? (
                            data.map(d => (
                                <div key={d._id} className='bg-gray-900 p-4 my-8 sm:mx-16 rounded-2xl'>
                                    <p className='text-2xl md:text-4xl py-4'> '{d.message}' </p>
                                    <div className='lg:flex lg:flex-row lg:justify-between'>
                                        <p className='text-lg md:text-2xl'> ~{d.user.name} </p>
                                        <p className='md:text-lg'> -{d.user.email} </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className='text-center flex flex-col justify-center items-center text-2xl h-[45vh]'> 
                                <p> No feedbacks recieved yet! </p>
                            </div>
                        )}
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports