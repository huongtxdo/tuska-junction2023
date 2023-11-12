import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./theme.tsx";

import EventView from "./routes/eventView.tsx";
import Root from "./routes/root.tsx";
import Login from "./routes/login.tsx";
import GroupPage from "./routes/groupPage.tsx";
import StatisticsView from "./routes/app/statistics.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/groups",
        element: <GroupPage />,
      },
      {
        element: <AppLayout />,
        children: [
          {
            path: "events",
            element: <Events />,
          },
          {
            path: "events/pool-night",
            element: <EventView eventName="Pool Night" eventDescription="8Ball Pool With Friends!" location="Helsinki Kamppi" date="12th November" />,
          },
          {
            path: "events/mini-golf",
            element: <EventView eventName="Mini Golf" eventDescription="Tiny Golf(Not the Polo)" location="Helsinki" date="15th November" />,
          },
          {
            path: "events/lammassaari",
            element: <EventView eventName="Animal Petting" eventDescription="Happy chemicals from animals :D" location="Helsinki" date="23 November" />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "pain",
            element: <StatisticsView/>,
          },
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
]);

import Container from "@mui/material/Container";
import AppLayout from "./routes/app/layout.tsx";
import Home from "./routes/app/home.tsx";
import Events from "./routes/app/events.tsx";
import Profile from "./routes/app/profile.tsx";

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
