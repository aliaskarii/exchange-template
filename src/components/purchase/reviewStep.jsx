import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import numberWithCommas from "../../lib/numberWithCommas";
import { useSelector } from "react-redux";

function formatCardNumber(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "-");
}

export default function ReviewStep() {
  const {
    symbol,
    spend,
    cardnumber,
    iban,
    lastsymbolprice,
  } = useSelector((state) => state.purchase.purchaseData);
  const purchaseStatus = useSelector((state) => state.purchase.status);

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
            {numberWithCommas(spend)} Rial
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
    </React.Fragment>
  );
}
