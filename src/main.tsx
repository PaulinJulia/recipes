import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/Error-page";
import { SweetsRoute } from "./routes/SweetsRoute";
import { HomeRoute } from "./routes/HomeRoute";
import { FoodRoute } from "./routes/FoodRoute";
import { BreadRoute } from "./routes/BreadRoute";
import { PastryRoute } from "./routes/PastryRoute";
import { SidesRoute } from "./routes/SidesRoute";
import { RecipeInstruction } from "./components/RecipeInstruction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomeRoute />,
      },
      {
        path: "sweets",
        element: <SweetsRoute />,
      },
      {
        path: "food",
        element: <FoodRoute />,
      },
      {
        path: "bread",
        element: <BreadRoute />,
      },
      {
        path: "pastry",
        element: <PastryRoute />,
      },
      {
        path: "sides",
        element: <SidesRoute />,
      },
      {
        path: "recipes/:recipeId",
        element: <RecipeInstruction />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
