import React from 'react'
import { Grid  } from '@mui/material'
import Currencies from '../../data/currencies.js'


function CurrentPrice() {
  return (
    <Grid sx={{pt:20}}>
        <Currencies />
    </Grid>
  )
}

export default CurrentPrice
