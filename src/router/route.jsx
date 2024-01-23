import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../page/SignUp/SignUp";
import LogIn from "../page/Login/LogIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
