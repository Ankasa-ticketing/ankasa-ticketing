import axios from 'axios'
import { create } from 'zustand'

// const { photo, email, phone, city, fullname, address, post_code } = JSON.parse(
//     localStorage.getItem('user')
// )

const useUser = create((set) => ({
    email: null,
    phone: null,
    fullname: null,
    city: null,
    address: null,
    postCode: null,
    photo: null,
    msgResponse: '',
    loading: true,
    error: null,

    setCity: (v) => {
        set({ city: v })
    },

    updateProfile: async (jwt, input) => {
        try {
            const res = await axios.put('http://localhost:5000/users', input, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
                withCredentials: true,
            })

            set({ msgResponse: await res.data.msg })
            set({ email: input.email })
            set({ phone: input.phone })
            set({ fullname: input.fullname })
            set({ city: input.city })
            set({ address: input.address })
            set({ postCode: input.post_code })
        } catch (error) {
            set({ error })
        }

        setTimeout(() => {
            set({ msgResponse: '' })
        }, 2500)
    },
}))

export default useUser
