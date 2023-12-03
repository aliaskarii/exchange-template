import {
  createBrowserRouter,
  redirect,
} from 'react-router-dom'
import { fakeAuthProvider } from './auth'
import DashboardLayout from './layouts/dashboard'
import AuthLayout from './layouts/auth'
import Login from './pages/auth/login'
import Home from './pages/dashboard/home'
import PublicLayout from './layouts/public'
import ProfilePage from './pages/dashboard/profile'




export const router = createBrowserRouter([
  {
    id: 'root',
    path: '/',
    loader() {
      return { user: fakeAuthProvider.username }
    },
    Component: PublicLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    Component: DashboardLayout,
    children: [
      {
        path: 'dashboard',
        loader: protectedLoader,
        Component: ProfilePage,
      },
    ],
  },
  {
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        loader: loginLoader,
        action: loginAction,
        Component: Login,
      },
    ],
  },
  {
    path: '/logout',
    async action() {
      await fakeAuthProvider.signout()
      return redirect('/')
    },
  },
])



export async function loginAction(props) {
  let phone = props.phone
  let password = props.password
  
  if (!phone && !password) {
    return {
      error: 'You must provide a username to log in',
    }
  }
  try {
    await fakeAuthProvider.signin(phone)
  } catch (error) {
    // handle invalid
    return {
      error: 'Invalid login attempt',
    }
  }
  

  return redirect('/dashboard')
}


  
async function loginLoader() {
  if (fakeAuthProvider.isAuthenticated) {
    return redirect('/')
  }
  return null
}
  
  
function protectedLoader({ request }) {
  if (!fakeAuthProvider.isAuthenticated) {
    let params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }
  return null
}
  