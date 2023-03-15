import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Posts from "../pages/Posts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/articles",
    element: <Posts />,
  },
]);
