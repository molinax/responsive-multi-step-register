import Steps from '../containers/Steps'

const Card = ({ title, children }) => {
  return (
    <>
      <div className="bg-semi-light-dark p-9 rounded-xl border border-dark-gray flex flex-col gap-y-8">
        <header>
          <h2 className="text-semi-white font-[500] text-xl">{title}</h2>
        </header>
        {children}
      </div>
      <Steps />
    </>
  )
}

export default Card
