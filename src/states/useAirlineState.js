import axios from "axios";
import { create } from "zustand";

const useAirlineState = create((set) => ({
  data: [],
  msgResponse: null,
  loading: true,
  error: null,
  fecthAirlines: async (jwt) => {
    try {
      const response = await axios.get("http://localhost:5000/airlines", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      set({ data: await response.data.data });
      set({ loading: false });
    } catch (error) {
      set({ error: error });
    }
  },
  insertAirline: async (jwt, input) => {
    try {
      const res = await axios.post("http://localhost:5000/airlines", input, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log(res);
      set({ msgResponse: await res.data.msg });
    } catch (error) {
      set({ error });
    }
  },
}));

export default useAirlineState;
