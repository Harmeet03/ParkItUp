import Navbar from '../../components/User/Navbar'

const SlotBooking = () => {
    const booked = false
    const p1 = true
    return(
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">
                
                <div className="flex flex-col gap-2 items-center justify-center">
                    <p className="text-2xl sm:text-4xl"> SELECT A PARKING SLOT </p>
                    <p> Date: 11/11/2025 </p> 
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-8 md:gap-10">
                    
                    <Navbar/>

                    <div className="w-full p-5 bg-gray-100 m-auto rounded-xl overflow-y-scroll h-[64vh]">
                        <div className="p-5 text-8xl rounded-xl m-auto grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                            {p1 ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>1</span>
                                </span>
                            } 

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>2</span>
                                </span>
                            }  

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>3</span>
                                </span>
                            }  

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>4</span>
                                </span>
                            }  

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>5</span>
                                </span>
                            }  

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>6</span>
                                </span>
                            }  

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>7</span>
                                </span>
                            }  

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>8</span>
                                </span>
                            }

                            {booked ? 
                                <span className='p-4 bg-white rounded-2xl cursor-not-allowed'> X </span> 
                                :
                                <span className='p-4 bg-white rounded-2xl cursor-pointer hover:scale-90 hover:bg-blue-400 transition'> 
                                    P<span className='text-sm'>9</span>
                                </span>
                            }  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SlotBooking