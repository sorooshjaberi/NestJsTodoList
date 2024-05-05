import AuthProvider from "@/providers/auth.provider";
import QueryProvider from "@/providers/query.provider";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import ThemeProvider from "./theme.provider";
import ToastProvider from "@/providers/toast.provider";

const AppProvider: FC = () => {
  return (
    <>
      <AuthProvider>
        <QueryProvider>
          <ThemeProvider>
            <ToastProvider>
              <Outlet />
            </ToastProvider>
          </ThemeProvider>
        </QueryProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;
