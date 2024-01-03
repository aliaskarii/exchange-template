import React, { useEffect } from 'react'
import useAuth from './hooks/useAuth'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'

function RequireAuth() {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  console.log('ddddd')
  useEffect(() => {
    if (!auth.user) {
      navigate('/login', {
        state: { from: location },
        replace: true,
      })
    }
  }, [navigate, location])

  return <Outlet />
}
export default RequireAuth
