import Home from "@/pages";
import Login from "@/pages/login";
import AppProvider from "@/providers/index.provider";
import { FC } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <AppProvider />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
