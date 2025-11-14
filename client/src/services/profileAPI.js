import api from "./api"

export const profile = async () => {
    const res = await api.get('/profile/user') 
    return res.data
}