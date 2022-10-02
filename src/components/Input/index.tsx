import { ChangeEvent } from "react"
import { IForm } from "../../types/types"

interface InputProps extends IForm {
  type: string
  // eslint-disable-next-line no-unused-vars
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
  const { onChange, value, ...rest } = props
  return (
    <input
      {...rest}
      onChange={(e) => onChange(e)}
      value={value}
      className="border-black border-2 rounded px-2 py-1"
    />
  )
}
