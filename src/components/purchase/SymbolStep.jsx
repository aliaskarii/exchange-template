import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Button, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { InputAdornment } from '@mui/material'
import FetchSymbolPrices from '../../lib/FetchSymbolPrices'
import { SymbolsList } from '../../data/SymbolsList'
import Skeleton from '@mui/material/Skeleton'
import NumberWithCommas from '../../lib/NumberWithCommas'
import { useDispatch, useSelector } from 'react-redux'
import { Cloud } from '@mui/icons-material'
import { info, next } from '../../slices/purchase/PurchaseSlice'

function SymbolStep() {
  const dispatch = useDispatch()
  const purchase = useSelector((state) => state.purchase.value)
  const step = useSelector((e) => e.purchase.step)

  const [symbolsData, setSymbolsData] = useState([])
  const [symbol, setSymbol] = useState(0)
  const [spend, setSpend] = useState(0)
  const [received, setReceived] = useState(0)
  const [loading, setLoading] = useState(true)

  function handlenextClick() {
    dispatch(info({ ...purchase, nextClick: true }))
    if (
      step == 0 &&
      spend > 0 &&
      received > 0
    ) {
      dispatch(next())
      dispatch(info({
        ...purchase,
        nextClick: false,
        symbol: symbolsData[symbol].name,
        spend: spend,
        price: symbolsData[symbol].price[49]
      }))
    }
  }
  useEffect(() => {
    setLoading(true)
    Promise.all(SymbolsList.map((name) => FetchSymbolPrices(name)))
      .catch((error) => {
        console.error('Error fetching symbol prices:', error)
        setLoading(false)
      })
      .then((res) => {
        setSymbolsData(res)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <>
        <Skeleton
          sx={{ height: 250, mb: 3, borderRadius: 3 }}
          animation="wave"
          variant="rectangular"
        />
      </>
    )
  }

  return (
    <Grid>
      <Grid item xs={12} paddingY={2}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-select-small-label">Symbol</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={symbol}
            label="Symbol"
            onChange={(e) => setSymbol(e.target.value)}
            sx={{maxWidth: '100%' }}
          >
            {symbolsData.map((symbolData, index) => (
              <MenuItem key={index} value={index}>
                <ListItemIcon>
                  <Cloud fontSize="small"/>
                </ListItemIcon>
                <ListItemText>{symbolData.name}</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  {NumberWithCommas(symbolData.price[49])}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <hr />
      <Grid item xs={12} sm={6} >
        <Typography variant="overline" display="block" gutterBottom>
          {NumberWithCommas(symbolsData[symbol].price[49] * 500000)} Rial
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} paddingY={1}>
        <TextField
          placeholder="10,000,000-500,000,000"
          required
          id="spent"
          name="spent"
          label="Spent"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: <InputAdornment position="end">Rial</InputAdornment>,
          }}
          fullWidth
          autoComplete="Total price"
          variant="standard"
          value={spend}
          onChange={(e) => {
            setSpend(e.currentTarget.value)
            setReceived(
              e.currentTarget.value / (symbolsData[symbol].price[49] * 500000)
            )
          }}
          error={spend === 0 && purchase.nextClick}
          helperText={spend === 0 && purchase.nextClick ? 'Empty Field!' : ' '}
        />
      </Grid>

      <Grid item xs={12} sm={6} paddingY={2}>
        <TextField
          placeholder="0-100"
          required
          id="received"
          name="received"
          label="Received"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {symbolsData[symbol].name}
              </InputAdornment>
            ),
          }}
          fullWidth
          autoComplete="Amount"
          variant="standard"
          value={received}
          onChange={(e) => {
            setReceived(e.currentTarget.value)
            setSpend(
              e.currentTarget.value * symbolsData[symbol].price[49] * 500000
            )
          }}
          error={received === 0 && purchase.nextClick}
          helperText={received === 0 && purchase.nextClick ? 'Empty Field!' : ' '}
        />
      </Grid>
      <Button fullWidth onClick={handlenextClick}>Next</Button>
    </Grid >
  )
}
export default SymbolStep
