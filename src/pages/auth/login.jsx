import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import group360 from '../../assets/images/Group360.png'
import useAuth from '../../hooks/useAuth'
import { useLocation } from 'wouter'

function Login() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const auth = useAuth()
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
    rememberMe: false,
  })

  const [errors, setErrors] = useState({
    phone: '',
    password: '',
  })

  const validateForm = () => {
    let valid = true
    const newErrors = { phone: '', password: '' }

    if (!formData.phone) {
      newErrors.phone = 'phone is required'
      valid = false
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters with at least one uppercase and one lowercase letter'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {

    e.preventDefault()
    if (validateForm()) {
      await auth.signin(formData.phone)
      navigate('/home', {
        state: { from: state },
        replace: true,
      })
    } else {
      console.log('Login failed')
    }
  }

  const handleChange = (e) => {
    const { name, value, checked } = e.target
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    })
  }

  return (
    <Grid container component="main" sx={{ height: '100vh' }} direction='row-reverse'>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${group360})`,
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
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={Boolean(errors.phone)}
              helperText={errors.phone}
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
              value={formData.password}
              onChange={handleChange}
              error={Boolean(errors.password)}
              helperText={errors.password}
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
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
export default Login