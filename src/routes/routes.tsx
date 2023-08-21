import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllItemsLayout from "../layout/AllItemsLayout";
import AllBlogs from "../pages/AllBlogs";
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
  {
    path: "/all",
    element: <AllItemsLayout />,
    children: [
      {
        index: true,
        element: <AllBlogs />,
      },
    ],
  },
]);

export default routes;
