import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Landing /> },
      { path: "product", element: <Products /> },
      { path: "product/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      { path: "checkout", element: <Checkout /> },
      { path: "orders", element: <Orders /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
