import { useDashboard } from "../../store/useDashboard"
import Title from "../Title"

export default function Header() {
  const { dashboards } = useDashboard()

  if (!dashboards.sales_over_time_week) {
    return <div>loading...</div>
  }

  const data = Object.values(dashboards.sales_over_time_week)

  return (
    <div className="flex flex-col gap-8">
      <Title text="Dashboard" />
      <ul className="flex gap-12">
        {data?.slice(0, 4).map((item: any, index) => (
          <li
            key={index}
            className="flex flex-col w-72 p-2 gap-1 text-xl border-[1px] border-gray-800"
          >
            <h4>Today</h4>
            <div className="flex gap-1">
              <span>$ {item.total}</span>
              <span>/</span>
              <span>{item.orders} orders</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
