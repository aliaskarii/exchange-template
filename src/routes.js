import React from 'react'
import PropTypes from 'prop-types'

export const AuthContext = React.createContext()

export default function AuthProvider({ children }) {
  AuthProvider.propTypes = {
    children: PropTypes.any
  }
  const [user, setUser] = React.useState(null)

  const signin = async (newUser) => {
    await Promise.resolve((r) => setTimeout(r, 500))
    setUser(newUser)
  }

  const signout = async () => {
    await Promise.resolve((r) => setTimeout(r, 500))
    setUser(null)
  }

  const contextValue = React.useMemo(
    () => ({
      user,
      signin,
      signout
    }),
    [user]
  )
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}