const Button = ({ value, className }) => {
  return (
    <button className={`bg-gradient-to-t from-purple to-light-purple text-semi-white font-[500] text-sm rounded-full py-3 px-9 transition-d-200 hover:opacity-80 focus:opacity-80 ${className || null}`}>{value}</button>
  )
}

export default Button
