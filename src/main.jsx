import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SelectUser from "./routes/login/SelectUser";
// import App from "./App";
// import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <SelectUser />,
        children: [
          {
            path: "client",
            element: <h1>client</h1>,
          },
          {
            path: "sign-up",
            element: <h1>signup</h1>,
          },
          {
            path: "success",
            element: <h1>You are successfully registered!</h1>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
