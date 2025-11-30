import { useLocation, useNavigate } from "react-router"

const Success = () => {
    const to = useNavigate()
    const location = useLocation()

    const { bookingId, date, time, slotNumber, amount } = location.state || { bookingId: 'N/A', date: 'N/A', time: 'N/A', slotNumber: 'N/A', amount: 'N/A' }
    
    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto rounded-lg p-5 text-center">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4"> BOOKING CONFIRMATION </p>
                <div className="bg-green-500 w-20 p-4 rounded-full m-auto">
                    <span className="text-white text-4xl"> ✓ </span>
                </div>
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4"> Booking Successful! </p>
                <p className="text-sm sm:text-md md:text-lg lg:text-xl"> Your parking slot has been booked successfully. </p>
                
                <div className="bg-gray-100 p-4 rounded-xl flex flex-col gap-4 w-5/6 md:w-2/3 lg:w-1/2 m-auto mt-4">
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-xs sm:text-2xl font-bold"> Booking_Id </p>
                        <p className="text-xs sm:text-lg"> {bookingId} </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-lg sm:text-2xl font-bold"> Date </p>
                        <p className="text-sm sm:text-lg"> {date} </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-lg sm:text-2xl font-bold"> Time </p>
                        <p className="text-sm sm:text-lg"> {time} </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-lg sm:text-2xl font-bold"> Slot Number </p>
                        <p className="text-sm sm:text-lg"> {slotNumber} </p>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <p className="text-lg sm:text-2xl font-bold"> Amount Paid </p>
                        <p className="text-sm sm:text-lg"> ₹{amount} </p>
                    </div>
                </div>

                <div className="w-1/2 m-auto p-2 text-xl bg-green-500 text-white mt-4 rounded-xl cursor-pointer hover:scale-95 transition" onClick={() => to('/book_slot')}>
                    <p> Return Back </p>
                </div>

            </div>
        </div>
    )
}

export default Success