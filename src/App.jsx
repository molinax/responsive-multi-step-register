import { useEffect, useState } from 'react'
import { useGlobalContext } from './context/GlobalContext'
import Home from './components/pages/Home'
import Topics from './components/pages/Topics'
import Summary from './components/pages/Summary'

const App = () => {
  const {
    state: { steps }
  } = useGlobalContext()
  const [view, setView] = useState()

  useEffect(() => {
    switch (steps.currentStep) {
      case 1:
        return setView(<Home />)
      case 2:
        return setView(<Topics />)
      case 3:
        return setView(<Summary />)
    }
  }, [steps.currentStep])

  return (
    <>
      <div className="w-full flex items-center justify-center min-h-screen relative overflow-hidden bg-dark">
        <div className="bg-[url('../public/img/blur-radial.svg')] absolute -top-32 -left-32 size-[24rem] sm:size-[32rem] lg:size-[42rem] lg:-top-44 lg:-left-48 bg-cover"></div>
        <div className="bg-[url('../public/img/blur-radial.svg')] absolute -bottom-32 -right-32 size-[24rem] sm:size-[32rem] lg:size-[42rem] lg:-bottom-44 lg:-right-48 bg-cover"></div>
        <main className="w-[90%] max-w-lg relative z-10">{view}</main>
      </div>
    </>
  )
}

export default App
