import axios from 'axios'
import { create } from 'zustand'

let data
if (!localStorage.getItem('user')) {
    data = ''
} else {
    data = {
        city: JSON.parse(localStorage.getItem('user')).city,
        address: JSON.parse(localStorage.getItem('user')).address,
        fullname: JSON.parse(localStorage.getItem('user')).fullname,
    }
}

const useUser = create((set) => ({
    email: null,
    phone: null,
    fullname: data.fullname,
    city: data.city,
    address: data.address,
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
            const res = await axios.put(import.meta.env.VITE_API_URL + '/users', input, {
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

            const temp = JSON.parse(localStorage.getItem('user'))

            const x = { ...input, photo: temp.photo }
            localStorage.setItem('user', JSON.stringify(x))
            // console.log(x)
        } catch (error) {
            set({ error })
        }

        setTimeout(() => {
            set({ msgResponse: '' })
        }, 2500)
    },
}))

export default useUser
