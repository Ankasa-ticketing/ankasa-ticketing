import axios from 'axios'
import { create } from 'zustand'
import ubahFormatWaktu from '../utils/time_format'

const useBooking = create((set) => ({
    ticket: [],
    booking: [],
    message: '',
    loading: false,
    error: null,

    clearerMsg: () => set({ message: '' }),
    fetchData: async (jwt, ticket_id) => {
        set({ loading: true })
        try {
            const data = await axios.get(
                import.meta.env.VITE_API_URL + `/tickets/${ticket_id}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                    withCredentials: true,
                }
            )

            const x = {
                ...data.data.data[0],
                time_arrived: ubahFormatWaktu(data.data.data[0].time_arrived),
                departure_time: ubahFormatWaktu(
                    data.data.data[0].departure_time
                ),
            }

            set({ ticket: x })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
    myBooking: async (jwt) => {
        set({ loading: true })
        try {
            const res = await axios.get(
                import.meta.env.VITE_API_URL + `/bookings`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                    withCredentials: true,
                }
            )
            set({ booking: await res.data.data })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
    bookingTicket: async (jwt, input, ticket_id) => {
        console.log('klik')
        set({ loading: true })
        try {
            const res = await axios.post(
                import.meta.env.VITE_API_URL + `/bookings/${ticket_id}`,
                input,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                    withCredentials: true,
                }
            )
            set({ message: res.data.message })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
    fecthOne: async (jwt, bookingId) => {
        try {
            const data = await axios.get(
                import.meta.env.VITE_API_URL + `/bookings/${bookingId}`,
                {
                    headers: {
                        Authorization: `Bearer ${jwt}`,
                    },
                    withCredentials: true,
                }
            )
            const x = {
                ...data.data.data[0],
                departure_time: ubahFormatWaktu(
                    data.data.data[0].departure_time
                ),
            }
            set({ booking: x })
            set({ loading: false })
        } catch (error) {
            set({ error })
        }
    },
}))

export default useBooking
