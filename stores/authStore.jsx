import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
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
      console.log("Login successful:", res.data);
      console.log("res", res);
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
    }
  },
}));

export default authStore;
