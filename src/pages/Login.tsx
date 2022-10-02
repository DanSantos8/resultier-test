import { ChangeEvent, useState } from "react"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../components/Button"
import { Icon } from "../components/Icons"
import Input from "../components/Input"
import { AuthContext } from "../contexts/AuthContext"
import { useLogin } from "../store/useLogin"

export default function Login() {
  const initialFormData = {
    username: "",
    password: "",
  }

  const { signin } = useContext(AuthContext)
  const { setToken } = useLogin()

  let navigate = useNavigate()

  const [form, setForm] = useState(initialFormData)

  const handleFormValues = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = {
      ...form,
      [e.target.name]: e.target.value,
    }
    setForm(value)
  }

  const validateForm = form.username.length < 5

  const handleSubmitForm = async () => {
    try {
      const res = await signin(form.username, form.password)
      setToken(res.access_token)
      navigate("/dashboard")
    } catch (e) {
      navigate("/login")
    }
  }

  return (
    <div className="flex justify-center place-items-center h-screen">
      <div className="flex flex-col bg-white p-5 justify-center place-items-center h-80 gap-4 border-gray-900 border-2">
        <Icon />
        <Input
          type="text"
          name="username"
          value={form.username}
          onChange={handleFormValues}
        />
        <Input
          type="password"
          name="password"
          value={form.password}
          onChange={handleFormValues}
        />
        <Button
          text="Login"
          disabled={validateForm}
          onClick={handleSubmitForm}
        />
      </div>
    </div>
  )
}
