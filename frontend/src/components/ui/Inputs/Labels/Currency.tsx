import { Typography } from "@mui/material";
import React from "react";

type Props = { currency?: string };

const Currency = (props: Props) => {
  const { currency = "ریال" } = props;
  return <Typography p={2}>{currency}</Typography>;
};

export default Currency;
