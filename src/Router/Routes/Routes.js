import { createBrowserRouter } from "react-router-dom";
import Main from "./../../Layouts/Main";
import Home from "./../../Pages/Home/Home";
import Brands from "../../Pages/Categories/Brands/Brands";
import Brand from "../../Pages/Categories/Brand/Brand";
import CardDetails from "./../../Pages/Categories/Brand/CardDetails";
import Blogs from './../../Pages/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },

      {
        path: "/brands/:name",
        element: <Brand></Brand>,
      },
      {
        path: "/brands/:name/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

export default router;
