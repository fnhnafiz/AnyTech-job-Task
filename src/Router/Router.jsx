
import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLayout from "../Main/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default Router;
