import create from "zustand"
import { devtools } from "zustand/middleware"
import { requester } from "../services/requester"

interface BearState {
  orders: any
  fetchOrders: (token: string, term: string) => void
}

export const useOrders = create<BearState>()(
  devtools((set) => ({
    orders: [],
    fetchOrders: async (token, term = "") => {
      const api = requester()
      try {
        const response = await api.fetchOrders(token, term)

        const normalizeResponse = response.data.orders.map((item: any) => ({
          productName: item.product.name,
          quantity: item.product.quantity,
          status: item.status,
        }))

        set({
          orders: normalizeResponse,
        })
      } catch (e) {
        set({
          orders: [],
        })
      }
    },
  }))
)
