import { Box, BoxProps } from "@mui/material";
import React from "react";

type Props = BoxProps<"img">;

const Image = (props: Props) => {
  return <Box component="img" {...props} />;
};

export default Image;
