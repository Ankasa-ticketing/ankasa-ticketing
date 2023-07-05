import { create } from 'zustand'

const useSideBar = create((set) => ({
    content: null,
    setContent: (select) => {
        set({ content: select })
    },
}))

export default useSideBar
