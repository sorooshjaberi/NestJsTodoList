import { FC, PropsWithChildren } from "react";
import { ChakraProvider as CProvider } from "@chakra-ui/react";

const ChakraProvider: FC<PropsWithChildren> = ({ children }) => {
  return <CProvider>{children}</CProvider>;
};

export default ChakraProvider;
