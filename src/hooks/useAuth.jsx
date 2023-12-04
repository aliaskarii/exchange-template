import React from 'react'
import { AuthContext } from '../routes'

function useAuth() {
  return React.useContext(AuthContext)
}
export default useAuth
