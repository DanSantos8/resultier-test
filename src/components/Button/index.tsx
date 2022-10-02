interface ButtonProps {
  disabled: boolean
  onClick: () => void
  text: string
}

export default function Button(props: ButtonProps) {
  const { disabled = true, text, ...rest } = props

  return (
    <button
      type="button"
      className="bg-gray-800 w-full p-2 rounded text-white transition-all transition-duration-75 disabled:opacity-25"
      disabled={disabled}
      {...rest}
    >
      {text}
    </button>
  )
}
