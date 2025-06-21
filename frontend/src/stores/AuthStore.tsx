// zustand 인증 상태 관리
import { create } from "zustand";

type AuthState = {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh: string) => void;
  logout: () => void;
  restore: () => void;
};

// 전역 상태 훅
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  setTokens: (access, refresh) => {
    console.log(`accessToken : ${access}`);
    set({ accessToken: access, refreshToken: refresh });
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
  },
  logout: () => {
    set({ accessToken: null, refreshToken: null });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  },
  restore: () => {
    set({
      accessToken: localStorage.getItem("accessToken"),
      refreshToken: localStorage.getItem("refreshToken"),
    });
  },
}));
