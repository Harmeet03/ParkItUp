import { useLocation, useNavigate } from "react-router"

const Failed = () => {
    const to = useNavigate()
    const location = useLocation()

    const { slotNumber, date } = location.state || { slotNumber: 'N/A', date: 'N/A' }

    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5 text-center">
                <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl my-4"> BOOKING CONFIRMATION </p>
                <div className="bg-red-500 w-40 p-8 rounded-full m-auto">
                    <span className="text-white text-8xl"> X </span>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4"> Booking Failed! </p>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl"> Your parking slot has not been booked due to unknown problem. </p>
                
                <div className="bg-gray-100 p-4 rounded-xl flex flex-col gap-4 w-5/6 md:w-2/3 lg:w-1/2 m-auto mt-4">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-lg sm:text-2xl font-bold"> Slot </p>
                        <p className="text-sm sm:text-lg"> P{slotNumber} </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-lg sm:text-2xl font-bold"> Date </p>
                        <p className="text-sm sm:text-lg"> {date} </p>
                    </div>
                </div>

                <div className="w-1/2 m-auto p-2 text-xl bg-red-500 text-white mt-4 rounded-xl cursor-pointer hover:scale-95 transition" onClick={() => to('/book_slot')}>
                    <p> Return Back </p>
                </div>
            </div>
        </div>
    )
}

export default Failed