import { createBrowserRouter } from "react-router-dom";
import SignUp from "../page/SignUp/SignUp";
import LogIn from "../page/Login/LogIn";
import Main from "../layout/Main";
import ErrorPage from "../page/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
