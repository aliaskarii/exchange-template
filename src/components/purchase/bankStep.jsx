import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

export default function BankStep() {
  const [cardnumber,setCardNumber]=React.useState()
  const [iban,setIban]=React.useState()


  
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
            onChange={(e)=>{
              setCardNumber(e.currentTarget.value)
            }}
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
            onChange={(e)=>{
              setIban(e.currentTarget.value)
            }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}