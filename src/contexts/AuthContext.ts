import { createContext } from "react"

interface User {
  id: number
  name: string
  email: string
  password?: string
}

export type AuthContextType = {
  user: User | null
  signin: (
    email: string,
    password: string
  ) => Promise<{ status: boolean; access_token: string }>
  signout: () => void
}

export const AuthContext = createContext<AuthContextType>(null!)
