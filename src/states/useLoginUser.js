import axios from "axios";
import { create } from "zustand";

const useLoginUser = create((set) => ({
  loading: false,
  responseAPI: null,
  error: null,
  login: async (input) => {
    set({ loading: true });
    try {
      const res = await axios.post("http://localhost:5000/login", input, {
        withCredentials: true,
      });
      localStorage.setItem("token", res.data.accessToken);
      console.log(res.data.accessToken);
      set({ responseAPI: await res.data.fullname });
      set({ loading: false });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useLoginUser;
