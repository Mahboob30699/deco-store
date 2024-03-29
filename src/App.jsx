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
import { ErrorElement } from "./component";

// Loaders
import { loader as LandingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from './pages/Orders';

// Actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./component/CheckoutForm";

import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productLoader,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action:checkoutAction(store),
      },
      { path: "orders", element: <Orders />,loader: ordersLoader(store), },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/Register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
