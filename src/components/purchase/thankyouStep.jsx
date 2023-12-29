import React from "react";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { reset } from "../../slices/purchase/purchaseSlice";
import { Button } from "@mui/material";


export default function ThankyouStep() {
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(reset())
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Thanks for confirming your order! We hope you have fun using our platform. If you ever need support, please feel free to email us
            </Typography>
            <Button onClick={handleClick} fullWidth>
                Finish
            </Button>
        </React.Fragment >
    );
}
