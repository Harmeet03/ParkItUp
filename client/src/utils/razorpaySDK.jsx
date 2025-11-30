import { createOrder, verifyPayment } from '../services/paymentAPI.js'

const razorpaySDK = async ({slotId, fetchSlots, to, currentDate, currentTime, slotNumber}) => {
    const { key, order } = await createOrder(slotId);

    const options = {
        key, 
        amount: order.amount,
        currency: "INR",
        name: "ParkItUp",
        description: "Parking Slot Booking",
        order_id: order.id,
        notes: { slotId },
        handler: async (response) => {
            try{
                const verifyResponse = await verifyPayment({ ...response, slotId })
                if(verifyResponse.success){
                    fetchSlots()
                    to('/success', {
                        state: {
                            bookingId: verifyResponse.userId,
                            date: currentDate,
                            time: currentTime,
                            slotNumber: slotNumber,
                            amount: order.amount / 100
                        }
                    })
                }
                else{
                    alert('Payment verification failed. Please contact support.')
                    to('/failed')
                }
            }
            catch(e){
                console.log('Payment verification failed:', e);
                alert('Payment verification failed.')
            }
        },
        theme: {
            color: "#f70000ff",
        },
    }

    const razor = new window.Razorpay(options);
    razor.open()
}

export default razorpaySDK;