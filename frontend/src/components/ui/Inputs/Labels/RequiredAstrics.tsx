import { Typography } from "@mui/material";
import React from "react";

type Props = {};

const RequiredAstrics = (props: Props) => {
  return <Typography color="error" component="span">*</Typography>;
};

export default RequiredAstrics;
