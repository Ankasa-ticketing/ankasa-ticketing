import axios from 'axios'
import { create } from 'zustand'

const useLoginUser = create((set) => ({
    responseAPI: null,
    accessToken: '',
    loading: false,
    error: null,
    login: async (input) => {
        set({ loading: true })
        try {
            const res = await axios.post(import.meta.env.VITE_API_URL + '/login', input, {
                withCredentials: true,
            })
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('user', JSON.stringify(res.data.user))

            const localStorageItem = JSON.stringify(res.data.user.role)
            const base64Item = btoa(localStorageItem)
            localStorage.setItem('role', base64Item)
            set({ responseAPI: await res.data })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
}))

export default useLoginUser
