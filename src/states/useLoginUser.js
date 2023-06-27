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
            const res = await axios.post('http://localhost:5000/login', input, {
                withCredentials: true,
            })
            localStorage.setItem('token', res.data.accessToken)

            const localStorageItem = JSON.stringify(res.data.role)
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
