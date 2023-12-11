import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import App from './App'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
const darktheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
    dark:'#2C353D',
    background:{
      default:'#242B31',
      paper:'#2C353D'
    }
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: rootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: rootElement,
      },
    },
  },
})

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darktheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
