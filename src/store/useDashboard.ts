import create from "zustand"
import { devtools, persist } from "zustand/middleware"
import { requester } from "../services/requester"

interface BearState {
  dashboards: any
  fetchDashboards: (token: string) => void
}

export const useDashboard = create<BearState>()(
  devtools((set) => ({
    dashboards: [],
    fetchDashboards: async (token: string) => {
      const api = requester()
      const response = await api.fetchDashboard(token)

      set({
        dashboards: response.data.dashboard,
      })
    },
  }))
)
