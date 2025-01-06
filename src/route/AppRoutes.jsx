import { createBrowserRouter, RouterProvider } from "react-router-dom";
import User from "../pages/User";
import Layout from "../Layout/Layout";
import Product from "../pages/Product";

const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    { index: true, element: <User /> },
    { path: "product", element: <Product /> },
  ],
}
]);

const AppRoute = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoute;
