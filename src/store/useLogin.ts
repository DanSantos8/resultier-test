import create from "zustand"
import { devtools, persist } from "zustand/middleware"

interface LoginState {
  access_token: string
  setToken: (value: string) => void
}

export const useLogin = create<LoginState>()(
  devtools(
    persist(
      (set) => ({
        access_token: "",
        setToken: (value) => set(() => ({ access_token: value })),
      }),
      {
        name: "user",
      }
    )
  )
)
