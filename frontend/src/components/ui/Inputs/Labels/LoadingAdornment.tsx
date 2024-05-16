import { Box, CircularProgress, CircularProgressProps } from "@mui/material";
import React from "react";

type Props = CircularProgressProps;

const LoadingAdornment = (props: Props) => {
  return (
    <Box className="flex items-center justify-center p-5 h-full">
      <CircularProgress color="inherit" size={18} {...props} />
    </Box>
  );
};

export default LoadingAdornment;
