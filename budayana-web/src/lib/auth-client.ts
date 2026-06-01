/// <reference types="vite/client" />

import { createAuthClient } from "better-auth/react"
import { usernameClient } from "better-auth/client/plugins"

// Production → ambil dari Vercel ENV
// Local → fallback ke backend aktif
const AUTH_BASE_URL =
  import.meta.env.VITE_AUTH_URL
    ? `${import.meta.env.VITE_AUTH_URL}/auth/api`
    : "https://budayana-tk.vercel.app/auth/api"

export const authClient = createAuthClient({
  baseURL: AUTH_BASE_URL,
  plugins: [usernameClient()],
})