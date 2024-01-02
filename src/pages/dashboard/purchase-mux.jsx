import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { useSelector } from 'react-redux'
import SymbolStep from '../../components/purchase/SymbolStep'
import BankStep from '../../components/purchase/bankStep'
import ReviewStep from '../../components/purchase/reviewStep'
import ThankyouStep from '../../components/purchase/thankyouStep'

export default function BuyForm() {
  const step = useSelector((state) => state.purchase.step)

  const stepDisplay = () => {
    switch (step) {
    case 0:
      return <SymbolStep />
    case 1:
      return <BankStep />
    case 2:
      return <ReviewStep />
    case 3:
      return <ThankyouStep />
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <React.Fragment>
            {stepDisplay()}
          </React.Fragment>
        </Paper>
      </Container>
    </React.Fragment>
  )
}