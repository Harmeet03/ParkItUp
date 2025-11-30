import api from "./api";

export const stats = async () => {
    const res = await api.get('/slot/stats')
    return res.data
}