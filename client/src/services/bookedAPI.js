import api from "./api";

export const booked = async () => {
    const res = await api.get('/slot/booked')
    return res.data
}

export const unbook = async (slotId) => {
    const res = await api.post('/slot/unbook', {slotId})
    return res.data
}