import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Today from "@mui/icons-material/Today";
import IconButton from "@mui/material/IconButton";
import East from "@mui/icons-material/East";
import Place from "@mui/icons-material/Place";
import "@fontsource/roboto/300.css";

import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Home from "@mui/icons-material/Home";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Person from "@mui/icons-material/Person";

import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from "../components/imageForLogin";
import { Outlet } from "react-router-dom";
import { NavigationButton } from "../components/IconButtonWithText";
import { Box, Container } from "@mui/material";
import { ButtonBar } from "@components/ButtonBox";

export default function EventView() {
  return (
    <>
      <ButtonBar></ButtonBar>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          align="left"
          sx={{ mt: 6, fontFamily: "Roboto", fontWeight: "Bold" }}
        >
          Template Name
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <BasicImage
          imageUrl="https://s3-eu-west-1.amazonaws.com/manxradionews/861807-1.jpg"
          imageHeight={300}
          borderRadiusIm={8}
        />
      </Box>
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="calendar"
          >
            <Today />
            <Typography
              variant="body1"
              align="center"
              sx={{ ml: 1, fontFamily: "Roboto", fontWeight: "Bold" }}
            >
              12th of November
            </Typography>
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
          >
            <East />
          </IconButton>
        </Toolbar>
      </Box>

      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="calendar"
          >
            <Place />
            <Typography
              variant="body1"
              align="center"
              sx={{ ml: 1, fontFamily: "Roboto", fontWeight: "Bold" }}
            >
              Helsinki, Pool Bar Ritz
            </Typography>
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
          >
            <East />
          </IconButton>
        </Toolbar>
      </Box>

      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          align="left"
          sx={{ ml: 1, fontFamily: "Roboto", fontWeight: "Bold" }}
        >
          Lorem ipsum :D
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: 2,
          marginRight: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ThemedButton variant="contained" disableElevation>
          Join
        </ThemedButton>
      </Box>

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
