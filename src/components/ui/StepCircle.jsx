const StepCircle = ({ isActive, isComplete }) => {
  const isActiveStyles =
    'bg-[#845EEE] before:absolute before:-top-[.3rem] before:-right-[.3rem] before:size-5 before:rounded-full before:bg-light-purple/30'

  return (
    <div
      className={`size-[.65rem] rounded-full relative ${
        isComplete ? 'bg-[#652CD1]' : 'bg-light-dark'
      } ${isActive ? isActiveStyles : null}`}
    ></div>
  )
}

export default StepCircle
