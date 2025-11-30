import api from "./api";

export const register = async (userData) => {
    const res = await api.post('/auth/register', userData)
    return res.data
}

export const login = async (credential) => {
    const res = await api.post('/auth/login', credential)
    return res.data
}

export const logout = async () => {
    const res = await api.post('/auth/logout')
    return res.data
}