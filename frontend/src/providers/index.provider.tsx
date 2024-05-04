import AuthProvider from "@/providers/auth.provider";
import ChakraProvider from "@/providers/chakra.provider";
import QueryProvider from "@/providers/query.provider";
import { FC } from "react";
import { Outlet } from "react-router-dom";

const AppProvider: FC = () => {
  return (
    <>
      <AuthProvider>
        <QueryProvider>
          <ChakraProvider>
            <Outlet />
          </ChakraProvider>
        </QueryProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;
