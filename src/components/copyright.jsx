import React from 'react'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Exchange Template With React
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
export default Copyright
