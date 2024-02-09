import { useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import Input from '../ui/Input'
import Button from '../ui/Button'

const RegisterForm = () => {
  const { setState } = useGlobalContext()
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })

  const onSubmit = (e) => {
    e.preventDefault()

    const isNameEmpty = name.error === ''
    const isEmailEmpty = email.error === ''

    if (isNameEmpty && isEmailEmpty) {
      setState(prevState => ({
        ...prevState,
        userData: {
          ...prevState.userData,
          name: name.value,
          email: email.value
        }
      }))

      return setState(prevState => ({
        ...prevState,
        steps: {
          ...prevState.steps,
          currentStep: 2
        }
      }))
    }
  }

  return (
    <form className="flex flex-col gap-y-6" onSubmit={onSubmit}>
      <Input
        name="name"
        label="Name"
        placeholder="enter your name"
        value={name.value}
        setValue={setName}
        error={name.error}
      />
      <Input
        name="email"
        label="Email"
        placeholder="example@gmail.com"
        value={email.value}
        setValue={setEmail}
        error={email.error}
      />
      <Button value="Continue" className="mt-2 self-center" />
    </form>
  )
}

export default RegisterForm
