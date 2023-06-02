import axios from "axios";
import { create } from "zustand";

const useRegisterUser = create((set) => ({
  loading: false,
  responseAPI: null,
  error: null,
  register: async (input) => {
    set({ loading: true });
    try {
      const res = await axios.post("http://localhost:5000/register", input);
      set({ responseAPI: await res.data.msg });
      set({ loading: false });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useRegisterUser;