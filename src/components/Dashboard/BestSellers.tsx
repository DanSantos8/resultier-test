import { useDashboard } from "../../store/useDashboard"
import Title from "../Title"
export default function BestSellers() {
  const { dashboards } = useDashboard()
  return (
    <div className="flex flex-col gap-8">
      <Title text="Best Sellers" />
      <table className="table-auto text-left border-collapse border border-slate-400">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Revenue</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {dashboards.bestsellers?.map((item: any) => (
            <tr key={item.product.id}>
              <td>{item.product.name}</td>
              <td>{item.revenue}</td>
              <td>{item.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
