import api from "./api";

export const addFeedback = async (formData) => {
    const res = await api.post('/feedback/add', formData)
    return res.data
}

export const getFeedback = async () => {
    const res = await api.get('/feedback')
    return res.data
}