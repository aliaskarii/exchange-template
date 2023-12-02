import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const darktheme = createTheme({
  direction:'ltr',
  palette: {
    mode: 'dark',
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
      <BrowserRouter>
        <ThemeProvider theme={darktheme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </StyledEngineProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
