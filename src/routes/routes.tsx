import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Resume from "../pages/Resume";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

export default routes;
