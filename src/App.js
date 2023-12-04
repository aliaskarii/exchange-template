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















// import React from 'react'
// import { Route, Redirect, Switch } from 'wouter'
// import Login from './pages/auth/login'
// import ProfilePage from './pages/dashboard/profile'
// import { RequireAuth } from './auth'
// import DashboardLayout from './layouts/dashboard'
// import AuthProvider from './routes'

// function App() {
//   return (
//     <AuthProvider>
//       <Switch>
//         <Route base="/exchange-dashboard/" path="/" component={() => (<Redirect to='/dashboard' />)} />
//         <Route path="/dashboard"
//           component={
//             () => (
//               <RequireAuth>
//                 <DashboardLayout>
//                   <ProfilePage />
//                 </DashboardLayout>
//               </RequireAuth>
//             )
//           }
//         />
//         <Route path="/login" component={Login} />
//       </Switch>
//     </AuthProvider>
//   )
// }
// export default App
