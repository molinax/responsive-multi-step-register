import { useGlobalContext } from '../../context/GlobalContext'
import StepCircle from '../ui/StepCircle'

const Steps = () => {
  const { state: { steps } } = useGlobalContext()
  const { currentStep } = steps

  return (
    <section className="flex gap-x-6 items-center mt-4 ml-[25%]">
      <p className="text-light-dark font-semibold text-sm">
        Step {steps.currentStep} of {steps.allSteps}
      </p>
      <ul className="flex gap-x-5">
        <li>
          <StepCircle isActive={currentStep === 1} isComplete={currentStep > 1}/>
        </li>
        <li>
          <StepCircle isActive={currentStep === 2} isComplete={currentStep > 2} />
        </li>
        <li>
          <StepCircle isActive={currentStep === 3} />
        </li>
      </ul>
    </section>
  )
}

export default Steps
