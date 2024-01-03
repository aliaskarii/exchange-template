import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { AuthProvider } from './Routes'

const App = () => {
  return (
    <div>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  )
}
export default App
