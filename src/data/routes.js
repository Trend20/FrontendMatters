import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Latest from "../pages/Latest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/latest",
    element: <Latest />,
  },
  {
    path: "/articles",
    element: <Posts />,
  },
]);
