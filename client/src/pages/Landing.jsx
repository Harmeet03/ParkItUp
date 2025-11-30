import { useNavigate } from 'react-router'
import car from '../assets/car1.png'
import Navbar from '../components/Navbar'

const Landing  = () => {
  const to = useNavigate()
    return(
      <>
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto overflow-y-scroll rounded-lg p-5">
  
              <p className='text-center p-1 px-4 mb-4 bg-cyan-600 text-white rounded-2xl'> We are currently serving at <span className='underline cursor-pointer'> DDA Park, near IITM College, Janakpuri </span> only.</p>
              
              <Navbar/>

              <div className="flex flex-col-reverse text-center gap-4 sm:flex-row sm:justify-center items-center m-auto lg:w-215 py-10">
                <div>
                    <p className="text-6xl mb-10"> Book Your Parking Slot Hassle-Free </p>
                    <button className="bg-cyan-600 py-3 px-10 rounded-xl text-white cursor-pointer hover:scale-90 transition" onClick={() => to('/sign_in')}> Find a Slot </button>
                </div>
                <div>
                    <img src={car} className="sm:w-150 sm:h-50 md:w-200 rounded-xl sm:rounded-2xl md:h-75 md:rounded-4xl"/>
                </div>  
              </div>

              <div className='bg-gray-100 flex justify-center gap-1 lg:gap-16 md:gap-16 sm:gap-16 py-4 rounded-2xl lg:text-2xl md:text-xl m-auto'>
                <div className='bg-white py-2 px-2 sm:px-6 md:px-8 lg:px-16 rounded-2xl cursor-pointer' onClick={() => to('/sign_in')}>
                    Select Date
                </div>
                <div className='bg-white py-2 px-2 sm:px-6 md:px-8 lg:px-16 rounded-2xl cursor-pointer' onClick={() => to('/sign_in')}>
                    Select Time
                </div>
                <div className='bg-white py-2 px-2 sm:px-6 md:px-8 lg:px-16 rounded-2xl cursor-pointer' onClick={() => to('/sign_in')}>
                    Select Slot
                </div>
              </div>

              <div className='m-auto lg:w-215 py-4'>
                <p className='text-4xl'> Features </p>
                <div className='my-4 flex flex-col gap-4 lg:flex lg:flex-row justify-around sm:grid sm:grid-cols-2 sm:gap-4'>
                  <div className='py-4 px-10 rounded-xl bg-gray-100'>
                      <p className='text-xl font-bold'> Instant Booking </p>
                      <p> Book a space in seconds </p>
                  </div>
                  <div className='py-4 px-10 rounded-xl bg-gray-100'>
                      <p className='text-xl font-bold'> Real-Time Slots </p>
                      <p> Easy to find available slots </p>
                  </div>
                  <div className='py-4 px-10 rounded-xl bg-gray-100 sm:col-span-2 sm:text-center lg:text-left'>
                      <p className='text-xl font-bold'> Secure Payments </p>
                      <p> Safe and encrypted payment. </p>
                  </div>
                </div>
              </div>
            
            </div>
        </div>
      </>
    )
}

export default Landing