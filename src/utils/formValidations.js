const setErrorState = (setState, error) => setState(prevState => ({ ...prevState, error: error || '' }))

export const validateNameInput = (value, setState) => {
  const regex = /^[^\d]+$/g

  if (value === '' || !regex.test(value)) {
    setErrorState(setState, 'The name is invalid')
  } else {
    setErrorState(setState)
  }
}

export const validateEmailInput = (value, setState) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (value === '' || !regex.test(value)) {
    setErrorState(setState, 'The email is invalid')
  } else {
    setErrorState(setState)
  }
}
