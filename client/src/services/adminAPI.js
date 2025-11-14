import api from "./api";

export const resetSlots = async () => {
    const res = await api.post(`/admin/reset-slots`)
    return res.data
}