import { useRef, useState } from 'react'

const CheckboxCard = ({ name, id, label }) => {
  const [isChecked, setIsChecked] = useState(false)
  const checkedRef = useRef(null)

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <label
        htmlFor={id}
        className={`block relative rounded-xl border border-dark-gray px-3 py-[.9rem] cursor-pointer transition-d-200 ${
          isChecked
            ? 'bg-light-purple text-semi-white font-semibold'
            : 'bg-light-dark text-gray hover:bg-dark-gray'
        }`}
      >
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        id={id}
        className="absolute"
        ref={checkedRef}
        checked={isChecked}
        onChange={handleChange}
      />
    </div>
  )
}

export default CheckboxCard
