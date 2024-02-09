import { createContext, useContext, useState } from 'react'

const INITIAL_STATE = {
  steps: {
    currentStep: 1,
    allSteps: 3
  },
  userData: {
    name: '',
    email: '',
    topics: []
  }
}

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  const [state, setState] = useState(INITIAL_STATE)

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}
