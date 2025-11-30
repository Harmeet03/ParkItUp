import api from "./api";

export const slots = async () => {
    const res = await api.get('/slot/slots')
    return res.data
}