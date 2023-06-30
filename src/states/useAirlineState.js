import axios from 'axios'
import { create } from 'zustand'

const useAirlineState = create((set) => ({
    data: [],
    msgResponse: null,
    loading: true,
    error: null,
    fecthAirlines: async (jwt) => {
        try {
            const response = await axios.get(
                import.meta.env.VITE_API_URL + '/airlines',
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )

            set({ data: await response.data.data })
            set({ loading: false })
        } catch (error) {
            set({ error: error })
        }
    },
    insertAirline: async (jwt, input) => {
        try {
            const res = await axios.post(
                import.meta.env.VITE_API_URL + '/airlines',
                input,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )

            set({ msgResponse: await res.data.msg })
        } catch (error) {
            set({ error })
        }
    },
    updateAirline: async (jwt, input, id) => {
        try {
            const res = await axios.put(
                import.meta.env.VITE_API_URL + `/airlines/${id}`,
                input,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )
            set({ msgResponse: await res.data.msg })
        } catch (error) {
            set({ error })
        }
    },
    deleteAirline: async (jwt, id) => {
        try {
            const res = await axios.delete(
                import.meta.env.VITE_API_URL + `/airlines/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                }
            )
            set({ msgResponse: await res.data.msg })
        } catch (error) {
            set({ error })
        }
    },
}))

export default useAirlineState
