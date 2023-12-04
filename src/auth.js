import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'wouter'
import useAuth from './hooks/useAuth'

export function RequireAuth({ children }) {
  RequireAuth.propTypes = {
    children: PropTypes.any
  }

  const auth = useAuth()

  if (!auth.user) {
    return <Redirect to="/login" />
  }

  return children
}
