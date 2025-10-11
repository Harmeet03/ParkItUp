import Navbar from "../../components/User/Navbar"
import parking from '../../assets/parking.png'

const Dashboard = () => {
    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5">
                
                <div className="flex flex-row items-center justify-between">
                    <p className="text-2xl sm:text-4xl"> DASHBOARD </p>
                    <div className="text-sm cursor-pointer sm:text-xl flex gap-2 items-center"> 
                        <span className="fa fa-user bg-cyan-100 p-2 rounded-full"/>
                        <p> Harmeet </p> 
                    </div>
                </div>

                <div className="flex flex-col my-4 gap-4 md:flex-row md:my-10 md:gap-10">
                    <Navbar/>
                    <div className="w-full p-5 bg-gray-100 m-auto rounded-xl overflow-y-scroll h-[70vh]">
                        <div className="flex items-center justify-between">
                            <p className="text-4xl"> Available Parking </p>
                            <span className="fa fa-car p-2 rounded-full bg-cyan-400"/>
                        </div>

                        <img src={parking} className="m-auto h-75 w-100"/>

                        <div className="bg-white p-5 rounded-xl">
                            <p className="text-2xl mb-4"> My Bookings </p>
                            <div className="bg-gray-200 p-4 sm:text-xl flex items-center justify-between rounded-xl mb-2">
                                <p> Booking Number </p>
                                <p> 11/11/2025 </p>
                            </div>
                            <div className="bg-gray-200 p-4 sm:text-xl flex items-center justify-between rounded-xl mb-2">
                                <p> Booking Number </p>
                                <p> 11/11/2025 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard