import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import BestSellers from "../components/Dashboard/BestSellers"
import DashboardSection from "../components/Dashboard/Dashboard"
import Revenues from "../components/Dashboard/Revenues"
import Template from "../components/Template"
import { useDashboard } from "../store/useDashboard"
import { useLogin } from "../store/useLogin"

export default function Dashboard() {
  const navigate = useNavigate()
  const { fetchDashboards } = useDashboard()
  const { access_token } = useLogin()

  useEffect(() => {
    try {
      fetchDashboards(access_token)
    } catch (e) {
      navigate("/")
    }
  }, [])

  return (
    <Template>
      <DashboardSection />
      <Revenues />
      <BestSellers />
    </Template>
  )
}
