import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme.tsx";

import Root from "./routes/root.tsx";
import Test from "./routes/test.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
    },
    {
      path: "/test",
      element: <Test />,
    },
  ],
  {
    basename: "/tuska-junction2023/",
  }
);

import Container from "@mui/material/Container";

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
