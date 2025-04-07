// stores/useAuthStore.js
import { create } from 'zustand';

const useAuthStore = create((set) => ({
  token: null,
  setToken: (token) => set({ token }),
  clearToken: () => set({ token: null }),
  isLoggedIn: () => !!useAuthStore.getState().token,
}));

export default useAuthStore;
