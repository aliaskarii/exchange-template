import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { useLocation, useNavigation } from 'react-router-dom'
import { loginAction } from '../../routes'


function Login() {
  let location = useLocation()
  let params = new URLSearchParams(location.search)
  let from = params.get('from') || '/'

  let navigation = useNavigation()
  let isLoggingIn = navigation.formData?.get('phone') != null


  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    let phone = data.get('phone')
    let password = data.get('password')
    loginAction(phone,password)
    console.log(phone,password)
  }
  return (
    <Grid container component="main" sx={{ height: '100vh' }} direction='row-reverse'>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(../assets/images/Group360.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: '70% auto',
          backgroundPosition: 'center',
        }}
      >
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            pl: 6,
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4" sx={{ mt: 3 }}>
            Sign in
          </Typography>
          <Typography component="h6" variant="h6" sx={{ mt: 3 }}>
            Log in to your account to access all feature
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <input type="hidden" name="redirectTo" value={from} />
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              autoComplete="phone"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid container direction="column">
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {'Don\'t have an account? Sign Up Here!'}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoggingIn}
            >
              {isLoggingIn ? 'Logging in...' : 'Login'}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Login