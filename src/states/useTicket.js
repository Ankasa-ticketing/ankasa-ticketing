import axios from 'axios'
import { create } from 'zustand'

const useTicket = create((set) => ({
    airlines: [],
    keyword: '',
    filterAirline: '',
    responseAPI: '',
    loading: false,
    error: null,
    searching: (v) => set({ keyword: v }),
    filter: (v) => set({ filterAirline: v }),
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
    fetchTickets: async (
        jwt,
        keyword = '',
        airline = '',
        page = 1,
        limit = 5
    ) => {
        set({ loading: true })
        try {
            const res = await axios.get(
                import.meta.env.VITE_API_URL +
                    `/tickets?limit=${limit}&page=${page}&search=${keyword}&airline=${airline}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )
            set({ airlines: await res.data.data })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
}))

export default useTicket
