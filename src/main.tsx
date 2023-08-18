import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme.ts";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home.tsx";
import PageNotFound from "./Pages/PageNotFound.tsx";
import RoomTour from "./Pages/RoomTour.tsx";
import Dining from "./Pages/Dining.tsx";
import Offers from "./Pages/Offers.tsx";
import Contact from "./Pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/roomtour",
    element: <RoomTour />,
  },

  {
    path: "/dining",
    element: <Dining />,
  },

  {
    path: "/offers",
    element: <Offers />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
