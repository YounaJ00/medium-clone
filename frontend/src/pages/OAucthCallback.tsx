import { useEffect } from "react";
import { useAuthStore } from "../stores/AuthStore";
import { useNavigate } from "@tanstack/react-router";

export default function OAuthCallback() {
  const setTokens = useAuthStore((storeInstance) => storeInstance.setTokens);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");
    console.log("accessToken:", accessToken);
    const refreshToken = params.get("refreshToken");
    console.log("refreshToken:", refreshToken);

    if (accessToken && refreshToken) {
      setTokens(accessToken, refreshToken);
      navigate({ to: "/post" });
    } else {
      alert("회원가입에 실패했거나 이미 가입된 계정입니다.");
      navigate({ to: "/" });
    }
  }, []);
}
