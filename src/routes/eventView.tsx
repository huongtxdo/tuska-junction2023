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
import { BasicImage } from "../components/BasicImage";
import { Outlet } from "react-router-dom";
import { NavigationButton } from "../components/NavigationButton";
import { Box, Container } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import More_Vert from "@mui/icons-material/MoreVert";
import Arrow_Back from "@mui/icons-material/ArrowBack";
import BookmarkEmpty from "@mui/icons-material/BookmarkBorder";
import BookmarkFull from "@mui/icons-material/Bookmark";

export default function EventView() {
  const [showBookmarkState, setBookmarkState] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Box
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={() => navigate("/events")}
          size="medium"
          edge="start"
          color="inherit"
          aria-label="arrow_back"
        >
          <Arrow_Back />
        </IconButton>
        <Box>
          {showBookmarkState ? (
            <IconButton
              onClick={() => setBookmarkState(false)}
              size="medium"
              edge="start"
              color="inherit"
              aria-label="bookmarkFull"
            >
              <BookmarkFull />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => setBookmarkState(true)}
              size="medium"
              edge="start"
              color="inherit"
              aria-label="bookmarkEmpty"
            >
              <BookmarkEmpty />
            </IconButton>
          )}
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="settings"
          >
            <More_Vert />
          </IconButton>
        </Box>
      </Box>
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
