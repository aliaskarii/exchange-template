import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { Button, InputAdornment } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { info, back, next } from '../../slices/purchase/purchaseSlice'

export default function BankStep() {
  const dispatch = useDispatch()
  const purchase = useSelector((state) => state.purchase.value)
  const step = useSelector((e) => e.purchase.step)

  const [cardnumber, setCardNumber] = useState('')
  const [iban, setIban] = useState('')

  function validateCardNumber() {
    var re16digit = /^\d{16}$/
    if (cardnumber.search(re16digit) == 1 && cardnumber != '') {
      return false
    }
    return true
  }
  function validateIbanNumber() {
    var re16digit = /^\d{26}$/
    if (iban.search(re16digit) == 1 && cardnumber != '') {
      return false
    }
    return true
  }

  function handlenextClick() {
    dispatch(info({ ...purchase, nextClick: true }))
    if (
      step == 1 && purchase.nextClick
    ) {
      dispatch(next())
      dispatch(info({
        ...purchase,
        nextClick: false,
        iban: iban,
        cardnumber: cardnumber

      }))
    }
  }
  function handlebackClick() {
    dispatch(info({ ...purchase, nextClick: false }))
    dispatch(back())
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            onChange={(e) => {
              setCardNumber(e.currentTarget.value)
            }}
            error={validateCardNumber && purchase.nextClick}
            helperText={validateCardNumber && purchase.nextClick ? 'Empty Field!' : ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="iban"
            label="IBAN"
            fullWidth
            variant="standard"
            InputProps={{
              startAdornment: <InputAdornment position="start">IR</InputAdornment>,
            }}
            onChange={(e) => {
              setIban(e.currentTarget.value)
            }}
            error={validateIbanNumber && purchase.nextClick}
            helperText={validateIbanNumber && purchase.nextClick ? 'Empty Field!' : ''}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth onClick={handlebackClick}>back</Button>
          <Button fullWidth onClick={handlenextClick}>Next</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}