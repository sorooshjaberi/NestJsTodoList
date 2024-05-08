import Navbar from "@/components/layout/Navbar";
import { Box, Stack } from "@mui/material";
import { PropsWithChildren } from "react";

type Props = {};

const RootLayout = ({ children }: PropsWithChildren<Props>) => {
  return (
    <Stack id="virtual_container" gap="0" overflow="auto" height="100dvh">
      {/* 70px height */}

      <Navbar height={70} />

      <Box height="calc(100dvh - 70px)" component="main">
        {children}
      </Box>
    </Stack>
  );
};

export default RootLayout;
