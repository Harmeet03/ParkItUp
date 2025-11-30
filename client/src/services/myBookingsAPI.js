import api from "./api";

export const myBookings = async () => {
    const res = await api.get('/slot/bookings/my')
    return res.data
}