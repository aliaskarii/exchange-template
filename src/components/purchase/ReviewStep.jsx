import React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import NumberWithCommas from '../../lib/NumberWithCommas'
import { useDispatch, useSelector } from 'react-redux'
import { back, next  } from '../../slices/purchase/PurchaseSlice'
import { Grid, Button } from '@mui/material'

function formatCardNumber(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, '-')
}
function ReviewStep() {
  const dispatch = useDispatch()
  const step = useSelector((e) => e.purchase.step)

  const {
    symbol,
    spend,
    cardnumber,
    iban,
    lastsymbolprice,
  } = useSelector((state) => state.purchase.value)
  const purchaseStatus = useSelector((state) => state.purchase.status)
  function handlenextClick() {
    if (step == 2) {
      dispatch(next())
    }
  }
  function handlebackClick() {
    dispatch(back())
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Sybmol" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {symbol}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Amount" />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {(spend / lastsymbolprice).toFixed(2)}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total Spend" />
          <Typography variant="body1" sx={{ fontWeight: 700 }}>
            {NumberWithCommas(spend)} Rial
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Card Number" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {formatCardNumber(cardnumber)}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="IBAN" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            IR{iban}
          </Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Order Status" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {purchaseStatus}
          </Typography>
        </ListItem>
      </List>
      <Grid item xs={12}>
        <Button fullWidth onClick={handlebackClick}>back</Button>
        <Button fullWidth onClick={handlenextClick}>Next</Button>
      </Grid>
    </React.Fragment>
  )
}
export default ReviewStep

