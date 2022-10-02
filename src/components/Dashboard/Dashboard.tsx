import { useDashboard } from "../../store/useDashboard"
import Title from "../Title"

export default function Header() {
  const { dashboards } = useDashboard()

  if (!dashboards.sales_over_time_week) {
    return <div>loading...</div>
  }

  const data = Object.values(dashboards.sales_over_time_week)

  const totalWeek = data.reduce(
    (initial: number, item: any) => initial + item.total,
    0
  )
  const orderWeek = data.reduce(
    (initial: number, item: any) => initial + item.orders,
    0
  )

  return (
    <div className="flex flex-col gap-8">
      <Title text="Dashboard" />
      <ul className="flex gap-12">
        <li className="flex flex-col w-72 p-2 gap-1 text-xl border-[1px] border-gray-800">
          <h4>Today</h4>
          <div className="flex gap-1">
            <span>$ {dashboards.sales_over_time_week[7].total}</span>
            <span>/</span>
            <span>{dashboards.sales_over_time_week[7].orders} orders</span>
          </div>
        </li>
        <li className="flex flex-col w-72 p-2 gap-1 text-xl border-[1px] border-gray-800">
          <h4>Week</h4>
          <div className="flex gap-1">
            <span>$ {totalWeek}</span>
            <span>/</span>
            <span>{orderWeek} orders</span>
          </div>
        </li>
        <li className="flex flex-col w-72 p-2 gap-1 text-xl border-[1px] border-gray-800">
          <h4>Month</h4>
          <div className="flex gap-1">
            <span>$ {dashboards.sales_over_time_year[12].total}</span>
            <span>/</span>
            <span>{dashboards.sales_over_time_year[12].orders} orders</span>
          </div>
        </li>
      </ul>
    </div>
  )
}
