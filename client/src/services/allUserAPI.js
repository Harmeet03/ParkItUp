import api from "./api";

export const users = async () => {
    const res = await api.get('/user/all')
    return res.data
}

export const allBookings = async () => {
    const res = await api.get('/user/bookings')
    return res.data
}