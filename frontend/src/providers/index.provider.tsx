import AuthProvider from "@/providers/auth.provider";
import QueryProvider from "@/providers/query.provider";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import ThemeProvider from "./theme.provider";
import ToastProvider from "@/providers/toast.provider";
import RootLayout from "@/components/layout/RootLayout";

const AppProvider: FC = () => {
  return (
    <>
      <AuthProvider>
        <QueryProvider>
          <ThemeProvider>
            <ToastProvider>
              <RootLayout>
                <Outlet />
              </RootLayout>
            </ToastProvider>
          </ThemeProvider>
        </QueryProvider>
      </AuthProvider>
    </>
  );
};

export default AppProvider;
