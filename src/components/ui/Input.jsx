import { validateNameInput, validateEmailInput } from '../../utils/formValidations'

const Input = ({
  type = 'text',
  name,
  label,
  placeholder,
  value,
  setValue,
  error
}) => {
  const handleChanges = (target) => {
    const newValue = target.value
    setValue({ value: newValue, error: '' })

    if (name === 'name') {
      validateNameInput(newValue, setValue)
    }

    if (name === 'email') {
      validateEmailInput(newValue, setValue)
    }
  }
  const errorsStyle = 'border-red-400 focus:border-red-500'

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex justify-between">
        <label htmlFor={name} className="text-gray font-semibold">
          {label}
        </label>
        {error !== '' && <p className="text-red-400">{error}</p>}
      </div>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => handleChanges(target)}
        className={`py-3 px-4 bg-semi-light-dark border-[3px] border-dark-gray rounded-xl text-gray placeholder:text-dark-gray placeholder:font-[500] outline-none focus:border-gray ${
          error !== '' ? errorsStyle : null
        }`}
      />
    </div>
  )
}

export default Input
