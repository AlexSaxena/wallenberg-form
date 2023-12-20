import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    username: "",
    password: "",
  },

  updateLoginForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        loginForm: { ...state.loginForm, [name]: value },
      };
    });
  },

  login: async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/auth/login",
        {
          username: e.target.username.value,
          password: e.target.password.value,
        },
        { withCredentials: true }
      );

      set({ loggedIn: true });
      console.log("Login successful:", res.data);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  },

  checkAuth: async () => {
    try {
      await axios.get("/check-auth", { withCredentials: true });
      set({ loggedIn: true });
    } catch (err) {
      console.error("Cookie", err.response);
      set({ loggedIn: false });
    }
  },
}));

export default authStore;
