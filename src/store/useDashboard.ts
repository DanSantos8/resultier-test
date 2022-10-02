import create from "zustand"
import { devtools } from "zustand/middleware"
import { requester } from "../services/requester"

interface BearState {
  dashboards: any
  fetchDashboards: (token: string) => void
}

export const useDashboard = create<BearState>()(
  devtools((set) => ({
    dashboards: [],
    fetchDashboards: async (token) => {
      const api = requester()
      const response = await api.fetchDashboard(token)
      console.log(response.data)

      set({
        dashboards: response.data.dashboard,
      })
    },
  }))
)
