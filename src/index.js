import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Security from "./pages/Security";
import Root from "./pages/Root";
import Main from "./pages/Main";
import Career from "./pages/Career";
import Legal from "./pages/Legal";
import Press from "./pages/Press";
import Support from "./pages/Support";
import Status from "./pages/Status";
import Codeblog from "./pages/Codeblog";
import License from "./pages/License";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Main /> },
      {
        path: "security",
        element: <Security />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "legal",
        element: <Legal />,
      },
      {
        path: "press",
        element: <Press />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "code",
        element: <Codeblog />,
      },
      {
        path: "license",
        element: <License />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </React.StrictMode>
);
