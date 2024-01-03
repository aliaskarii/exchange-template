import React from 'react'
import PropTypes from 'prop-types'
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Error404 from './pages/404'
import DashboardLayout from './layouts/DashboardLayout'
import Login from './pages/auth/Login'
import RequireAuth from './RequireAuth'
import ProfilePage from './pages/dashboard/ProfilePage'
import AboutUs from './pages/dashboard/AboutUs'
import CurrentPrice from './pages/dashboard/CurrentPrice'
import News from './pages/dashboard/News'
import PurchaseMux from './pages/dashboard/PurchaseMux'

export const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DashboardLayout />}>
        <Route path='/chat' element={<ProfilePage />} />
        <Route path='/learn' element={<ProfilePage />} />
        <Route path="/news" element={<News />} />
        <Route path="/current-price" element={<CurrentPrice />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/home' element={<PurchaseMux />} />
        <Route element={<RequireAuth />}>
          <Route path='/profile' element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </>
  )
)

export const AuthContext = React.createContext()

export function AuthProvider({ children }) {
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
