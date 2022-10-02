import { useState } from "react"
import { useCookies } from "react-cookie"
import { AuthContext } from "./AuthContext"
import { requester } from "../services/requester"

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "access_token",
    "user",
  ])
  const [user, setUser] = useState(cookies.user || null)

  const api = requester()

  const signin = async (username: string, password: string) => {
    const data = await api.signin(username, password)

    const date = new Date()
    date.setMinutes(date.getMinutes() + 15)

    if (data.access_token) {
      setUser({ username })
      setCookie("user", { user: data.user }, { expires: date })
      setCookie("access_token", data.access_token, { expires: date })
      return { status: true, access_token: data.access_token }
    }

    return { status: false, access_token: "" }
  }

  const signout = async () => {
    setUser(null)
    removeCookie("access_token")
    removeCookie("user")
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
}
