import React from 'react'
import PropTypes from 'prop-types'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './pages/dashboard/home'
import Error404 from './pages/404'
import DashboardLayout from './layouts/dashboard'
import Login from './pages/auth/login'
import RequireAuth from './auth'
import ProfilePage from './pages/dashboard/profile'
import AboutUs from './pages/dashboard/about-us'
import CurrentPrice from './pages/dashboard/currentprice'
import News from './pages/dashboard/news'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RequireAuth />}>
        <Route element={<DashboardLayout />}>
          <Route path='/home' element={<Home />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/chat' element={<ProfilePage />} />
          <Route path='/learn' element={<ProfilePage />} />
        </Route>
      </Route>
      <Route path="/news" element={<News />} />
      <Route path="/current-price" element={<CurrentPrice />} />
      <Route path="/about-us" element={<AboutUs />} />
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