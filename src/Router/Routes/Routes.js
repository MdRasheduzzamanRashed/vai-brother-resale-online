import { createBrowserRouter } from "react-router-dom";
import Main from "./../../Layouts/Main";
import Home from "./../../Pages/Home/Home";
import Brands from "../../Pages/Categories/Brands/Brands";
import Brand from "../../Pages/Categories/Brand/Brand";
import CardDetails from "./../../Pages/Categories/Brand/CardDetails";
import Blogs from "./../../Pages/Blogs/Blogs";
import AddALaptop from './../../Pages/AddALaptop/AddALaptop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("brands.json"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("brands.json"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("brands.json"),
      },

      {
        path: "/brands/:name",
        element: <Brand></Brand>,
        loader: () => fetch("laptops.json"),
      },
      {
        path: "/brands/:name/:id",
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/add-a-laptop",
        element: <AddALaptop></AddALaptop>,
      },
    ],
  },
]);

export default router;
