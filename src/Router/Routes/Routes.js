import { createBrowserRouter } from "react-router-dom";
import Main from "./../../Layouts/Main";
import Home from "./../../Pages/Home/Home";
import Brands from "../../Pages/Brands/Brands/Brands";
import Brand from "../../Pages/Brands/Brands/Brand/Brand";
import CardDetails from "../../utilities/CardDetails";
import Blogs from "./../../Pages/Blogs/Blogs";
import AllCollections from "./../../Pages/AllCollections/AllCollections";
import Signup from "./../../Pages/Signup/Signup";
import Login from "./../../Pages/Login/Login";

import PrivateRoutes from "./../PrivateRoutes/PrivateRoutes";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import DashboardLayout from "./../../Layouts/DashboardLayout";
import DisplayError from "./../../Pages/SharedSections/DisplayError/DisplayError";
import AddALaptop from "../../Pages/Dashboard/AddALaptop/AddALaptop";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyLaptops from "../../Pages/Dashboard/MyLaptops/MyLaptops";
import AllLaptops from "../../Pages/Dashboard/AllLaptops/AllLaptops";
import AddABrand from './../../Pages/Dashboard/AddABrand/AddABrand';
import Category from './../../Pages/Category/Category';
import Profile from "../../Pages/Profile/Profile";
import PostBlog from './../../Pages/Blogs/PostBlog';

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/laptops/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      {
        path: "/login",
        element: <Login></Login>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/register",
        element: <Signup></Signup>,
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/all-collections",
        element: <AllCollections></AllCollections>,
        loader: () => fetch("http://localhost:5000/laptops"),
      },
      {
        path: "/categories/:category",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.category}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout></DashboardLayout>
      </PrivateRoutes>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <AddALaptop></AddALaptop>
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/dashboard/my-laptops",
        element: (
          <PrivateRoutes>
            <MyLaptops></MyLaptops>
          </PrivateRoutes>
        ),
      },
      {
        path: "/dashboard/post-blog",
        element: (
          <PrivateRoutes>
            <PostBlog></PostBlog>
          </PrivateRoutes>
        ),
      },

      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/all-laptops",
        element: (
          <AdminRoutes>
            <AllLaptops></AllLaptops>
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/add-a-brand",
        element: (
          <AdminRoutes>
            <AddABrand></AddABrand>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
