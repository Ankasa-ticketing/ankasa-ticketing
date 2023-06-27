import axios from 'axios'
import { create } from 'zustand'

const useTicket = create((set) => ({
    airlines: [],
    responseAPI: '',
    loading: false,
    error: null,
    insertTicket: async (jwt, input) => {
        set({ loading: true })
        try {
            const res = await axios.post(
                'http://localhost:5000/tickets',
                input,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )
            set({ responseAPI: await res.data.msg })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },

    fetchTickets: async (jwt) => {
        set({ loading: true })
        try {
            const res = await axios.get('http://localhost:5000/tickets', {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            })
            set({ airlines: await res.data.data })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
}))

export default useTicket
