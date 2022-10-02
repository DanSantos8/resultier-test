import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Icon } from "../Icons"
export default function Sidebar() {
  const { signout } = useContext(AuthContext)
  return (
    <ul className="flex flex-col w-48 text-xl gap-4 py-5 border-r-2 border-gray-800 p-4">
      <li>
        <Icon />
      </li>
      <li className="px-2">
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li className="px-2">
        <Link to="/orders">Orders</Link>
      </li>
      <li className="px-2">
        <button onClick={() => signout()}>Logout</button>
      </li>
    </ul>
  )
}
