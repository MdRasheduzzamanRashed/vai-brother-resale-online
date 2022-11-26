import { createBrowserRouter } from "react-router-dom";
import Main from "./../../Layouts/Main";
import Home from "./../../Pages/Home/Home";
import Brands from "../../Pages/Brands/Brands/Brands";
import Brand from "../../Pages/Brands/Brands/Brand/Brand";
import CardDetails from "../../utilities/CardDetails";
import Blogs from "./../../Pages/Blogs/Blogs";
import AddALaptop from "./../../Pages/AddALaptop/AddALaptop";
import AllCollections from "./../../Pages/AllCollections/AllCollections";
import Signup from './../../Pages/Signup/Signup';
import Login from './../../Pages/Login/Login';
import MyLaptops from './../../Pages/MyLaptops/MyLaptops';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    loader: () => fetch("http://localhost:5000/brands"),
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
        loader: () => fetch("http://localhost:5000/brands"),
      },

      {
        path: "/brands/:brand",
        element: <Brand></Brand>,
      },
      {
        path: "/brands/:brand/:id",
        element: <CardDetails></CardDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/laptops/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/add-a-laptop",
        element: <AddALaptop></AddALaptop>,
      },
      {
        path: "/my-laptops",
        element: <MyLaptops></MyLaptops>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Signup></Signup>,
      },
      {
        path: "/all-collections",
        element: <AllCollections></AllCollections>,
        loader: () => fetch("http://localhost:5000/laptops"),
      },
    ],
  },
]);

export default router;
