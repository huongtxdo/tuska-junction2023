import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Home from "@mui/icons-material/Home";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Person from "@mui/icons-material/Person";

import { Outlet } from "react-router-dom";
import { NavigationButton } from "../../components/IconButtonWithText";
import { Container } from "@mui/material";

import { useState, createContext, Dispatch, SetStateAction } from "react";

type AppStateType = {
  firstSessionCompleted: boolean;
  setFirstSessionCompleted: null | Dispatch<SetStateAction<boolean>>;
};
export const AppState = createContext<AppStateType>({
  firstSessionCompleted: false,
  setFirstSessionCompleted: null,
});

export default function AppLayout() {
  const [firstSessionCompleted, setFirstSessionCompleted] = useState(false);

  return (
    <>
      <AppState.Provider
        value={{ firstSessionCompleted, setFirstSessionCompleted }}
      >
        <Outlet />
      </AppState.Provider>

      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Container maxWidth="xs">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <NavigationButton
              icon={<AccessibilityNew />}
              text="Events"
              path="/events"
            />
            <NavigationButton icon={<Home />} text="Home" path="/home" />
            <NavigationButton icon={<TrendingUp />} text="Pain" path="/pain" />
            <NavigationButton
              icon={<Person />}
              text="Profile"
              path="/profile"
            />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
