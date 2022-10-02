import { Routes, Route } from "react-router-dom"
import RequireAuth from "./contexts/RequireAuth"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import "./styles.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      />
      <Route
        path="/orders"
        element={
          <RequireAuth>
            <Orders />
          </RequireAuth>
        }
      />
    </Routes>
  )
}

export default App
