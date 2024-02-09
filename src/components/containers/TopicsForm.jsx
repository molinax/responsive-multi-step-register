import { useRef } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import Button from '../ui/Button'
import CheckboxCard from '../ui/CheckboxCard'

const TopicsForm = () => {
  const { setState } = useGlobalContext()
  const form = useRef(null)

  const onSubmit = (e) => {
    e.preventDefault()
    const checkboxes = form.current.querySelectorAll('input[type="checkbox"]')

    checkboxes.forEach((item) => {
      if (item.checked) {
        setState((prevState) => ({
          ...prevState,
          userData: {
            ...prevState.userData,
            topics: [...prevState.userData.topics, item.name]
          }
        }))

        return setState(prevState => ({
          ...prevState,
          steps: {
            ...prevState.steps,
            currentStep: 3
          }
        }))
      }
    })
  }

  return (
    <form className="flex flex-col gap-y-6" onSubmit={onSubmit} ref={form}>
      <CheckboxCard
        name="Software Development"
        id="softwareDevelopment"
        label="Software Development"
      />
      <CheckboxCard
        name="User experience"
        id="user-experience"
        label="User experience"
      />
      <CheckboxCard
        name="Graphic Design"
        id="graphic design"
        label="Graphic Design"
      />
      <Button value="Continue" className="mt-2 self-center" />
    </form>
  )
}

export default TopicsForm
