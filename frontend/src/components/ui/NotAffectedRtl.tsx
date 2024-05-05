import React, {  PropsWithChildren } from "react";
import { Box, styled } from "@mui/material";

type Props = { enabled?: boolean };

const NotRTLAffected = styled(Box)`
  /*! @noflip */
  direction: ltr;
`;

const NotAffectedRtl = ({
  enabled = true,
  children,
}: PropsWithChildren<Props>) => {
  if (enabled) {
    return <NotRTLAffected>{children}</NotRTLAffected>;
  }
  return <Box>{children}</Box>;
};

export default NotAffectedRtl;
