import { create } from "zustand";
import axios from "axios";

const authStore = create((set) => ({
  loggedIn: null,

  loginForm: {
    username: "",
    password: "",
  },

  registerForm: {
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

  updateRegisterForm: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        registerForm: { ...state.registerForm, [name]: value },
      };
    });
  },

  login: async () => {
    try {
      const { loginForm } = authStore.getState();

      const res = await axios.post("/auth/login", loginForm, {
        withCredentials: true,
      });

      set({
        loggedIn: true,
        loginForm: {
          username: "",
          password: "",
        },
      });
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

  register: async () => {
    const { registerForm } = authStore.getState();

    const res = await axios.post("/auth/register", registerForm, {
      withCredentials: true,
    });
    console.log("res ->", res);
    console.log("Register successful:", res.data);

    set({
      registerForm: {
        username: "",
        password: "",
      },
    });
  },

  logout: async () => {
    await axios.get("/auth/logout", { withCredentials: true });
    set({ loggedIn: false });
  },
}));

export default authStore;
