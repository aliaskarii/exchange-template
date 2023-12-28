import React, { useState, useEffect, useRef } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Typography } from "@mui/material";
import { InputAdornment } from "@mui/material";
import fetchSymbolPrices from "../../lib/fetchSymbolPrices";
import { symbols } from "../../data/currencielist";
import Skeleton from "@mui/material/Skeleton";
import numberWithCommas from "../../lib/numberWithCommas";
import { useDispatch, useSelector } from "react-redux";
import { Refresh } from "@mui/icons-material";
import { info, next } from "../../slices/purchase/purchaseSlice";

function SymbolStep() {
  const dispatch = useDispatch();
  const purchase = useSelector((state) => state.purchase.value);
  const step = useSelector((e) => e.purchase.step);

  const [symbolsData, setSymbolsData] = useState([]);
  const [symbol, setSymbol] = useState(0);
  const [spend, setSpend] = useState(0);
  const [received, setReceived] = useState(0);
  const [loading, setLoading] = useState(true);
  function handlenextClick() {
    console.log(purchase)
    dispatch(info({ ...purchase, nextClick: true }));
    if (step == 0) {
      dispatch(next());
      dispatch(info({ ...purchase, nextClick: false }))
    }
  }
  useEffect(() => {
    setLoading(true);
    Promise.all(symbols.map((name) => fetchSymbolPrices(name)))
      .catch((error) => {
        console.error("Error fetching symbol prices:", error);
        setLoading(false);
      })
      .then((res) => {
        setSymbolsData(res);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Skeleton
          sx={{ height: 250, mb: 3, borderRadius: 3 }}
          animation="wave"
          variant="rectangular"
        />
      </>
    );
  }

  return (
    <Grid spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-select-small-label">Symbol</InputLabel>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={symbol}
            label="Symbol"
            onChange={(e) => setSymbol(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {symbolsData.map((symbolData, index) => (
              <MenuItem key={index} value={index}>
                {symbolData.name}
                <hr />
                {numberWithCommas(symbolData.price[49])}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="overline" display="block" gutterBottom>
          {numberWithCommas(symbolsData[symbol].price[49] * 500000)} Rial
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
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
            setSpend(e.currentTarget.value);
            setReceived(
              e.currentTarget.value / (symbolsData[symbol].price[49] * 500000)
            );
          }}
          error={spend === 0 && purchase.nextClick}
          helperText={spend === 0 ? "Empty Field!" : " "}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
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
            setReceived(e.currentTarget.value);
            setSpend(
              e.currentTarget.value * symbolsData[symbol].price[49] * 500000
            );
          }}
          error={received === 0 && purchase.nextClick}
          helperText={received === 0 ? "Empty Field!" : " "}
        />
      </Grid>
      <Button onClick={handlenextClick}>Next</Button>
    </Grid>
  );
}

export default SymbolStep;
