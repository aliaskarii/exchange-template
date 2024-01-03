import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthProvider } from './routes'

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
