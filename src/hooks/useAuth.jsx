import React from 'react'
import { AuthContext } from '../Routes'

function useAuth() {
  return React.useContext(AuthContext)
}
export default useAuth
