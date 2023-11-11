import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme.tsx";

import Root from "./routes/root.tsx";
import Login from "./routes/login.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/select",
          element: <div>Select yo group</div>,
        },
        {
          element: <AppLayout />,
          children: [
            {
              path: "events",
              element: <div>Events</div>,
            },
            {
              path: "home",
              element: <div>Home</div>,
            },
            {
              path: "pain",
              element: <div>Pain</div>,
            },
            {
              path: "profile",
              element: <div>Profile</div>,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/tuska-junction2023/",
  }
);

import Container from "@mui/material/Container";
import AppLayout from "./routes/main/app.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
