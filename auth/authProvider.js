import { createContext, useEffect, useMemo, useState, React } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

function AuthProvider({ children }){
  AuthProvider.propTypes = {
    children: PropTypes.any
  }
  const [token, setToken_] = useState(localStorage.getItem('token'))

  const setToken = (newToken) => {
    setToken_(newToken)
  }

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
      localStorage.setItem('token', token)
    } else {
      delete axios.defaults.headers.common['Authorization']
      localStorage.removeItem('token')
    }
  }, [token])

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider
