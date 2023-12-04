import React from 'react'
import PropTypes from 'prop-types'
import {
    BrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    Routes
} from 'react-router-dom'
import Home from './pages/dashboard/home'
import Error404 from './pages/404'
import DashboardLayout from './layouts/dashboard'
import Login from './pages/auth/login'


const AppRoutes = () => (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<DashboardLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Error404 />} />
                </Route>
            </Routes>
        </Router>
    </>
)
export default AppRoutes