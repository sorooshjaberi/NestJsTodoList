import Home from "@/pages";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
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
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
