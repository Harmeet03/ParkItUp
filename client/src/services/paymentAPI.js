import api from "./api";

export const createOrder = async (slotId) => {
    const res = await api.post(`/slot/payment/checkout`, {slotId})
    return res.data
}

export const verifyPayment = async (paymentData) => {
    const res = await api.post(`/slot/payment/verify`, paymentData)
    return res.data
}