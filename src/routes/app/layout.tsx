import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Home from "@mui/icons-material/Home";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Person from "@mui/icons-material/Person";

import { Outlet } from "react-router-dom";
import { NavigationButton } from "../../components/IconButtonWithText";
import { Container } from "@mui/material";

export default function AppLayout() {
  return (
    <>
      <Outlet />

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
