import { useEffect, useState } from "react"
import { useLogin } from "../../store/useLogin"
import { useOrders } from "../../store/useOrders"
import Input from "../Input"
import Title from "../Title"

export default function Orders() {
  const { orders } = useOrders()
  const { fetchOrders } = useOrders()
  const { access_token } = useLogin()

  const [term, setTerm] = useState("")

  useEffect(() => {
    try {
      fetchOrders(access_token, term)
    } catch (e) {
      console.log("TODO error")
    }
  }, [term])

  return (
    <div className="flex flex-col gap-8 w-full">
      <Title text="Orders" />
      <Input
        type="text"
        onChange={(e) => setTerm(e.target.value)}
        name="search"
        value={term}
        placeholder="Search"
      />

      {!orders.length && <div>No results... </div>}

      {orders.length > 0 && (
        <table className="table-auto text-left border-collapse border border-slate-400">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: any) => (
              <tr key={order.productName}>
                <td>{order.productName}</td>
                <td>{order.quantity}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
