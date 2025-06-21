import ky from "ky";
import { z } from "zod";
import { useAuthStore } from "../stores/AuthStore";

const TokenResponseSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

const API_BASE_URL = "/open-api";

export const api = ky.create({
  prefixUrl: API_BASE_URL,
  hooks: {
    beforeRequest: [
      (request) => {
        const accessToken = useAuthStore.getState().accessToken;
        if (accessToken) {
          request.headers.set("Authorization", `Bearer ${accessToken}`);
        }
      },
    ],

    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          const refreshToken = useAuthStore.getState().refreshToken;
          if (!refreshToken) {
            useAuthStore.getState().logout();
            window.localStorage.href = "/";
            return;
          }
          try {
            const res = await ky
              .post("auth/renew", {
                prefixUrl: API_BASE_URL,
                json: { refreshToken },
              })
              .json();

            const { accessToken, refreshToken: newRefreshToken } =
              TokenResponseSchema.parse(res);
            useAuthStore.getState().setTokens(accessToken, newRefreshToken);

            request.headers.set("Authorization", `Bearer ${accessToken}`);
            return ky(request, options);
          } catch {
            useAuthStore.getState().logout();
            window.location.href = "/";
          }
        }
      },
    ],
  },
});
