import axios from "axios"

const api = axios.create({
  baseURL: "https://freddy.codesubmit.io/",
})

export const requester = () => {
  //const [cookies] = useCookies(["access_token"])

  return {
    signin: async (username: string, password: string) => {
      const response = await api.post("/login", { username, password })

      return response.data
    },
    fetchDashboard: async (token: string) => {
      const response = await api.get("/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response
    },
    fetchOrders: async (token: string, term: string) => {
      const response = await api.get(`/orders?page=1&q=${term}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return response
    },
  }
}
