import React from "react";
import Typography from "@mui/material/Typography";

function formatCardNumber(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{4})+(?!\d))/g, "-");
}

export default function ThankyouStep() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
    </React.Fragment>
  );
}
