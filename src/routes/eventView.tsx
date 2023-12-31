import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from "@components/BasicImage";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import More_Vert from "@mui/icons-material/MoreVert";
import Arrow_Back from "@mui/icons-material/ArrowBack";
import BookmarkEmpty from "@mui/icons-material/BookmarkBorder";
import BookmarkFull from "@mui/icons-material/Bookmark";
import Today from "@mui/icons-material/Today";
import East from "@mui/icons-material/East";
import Place from "@mui/icons-material/Place";

type EventViewProps = {
  eventName: string,
  eventDescription: string,
  date: string,
  location: string
  imagesrc: string
}

export default function EventView({eventName, eventDescription,  date, location,imagesrc}:EventViewProps) {
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
          sx={{ mt: 6, fontWeight: "600" }}
        >
          {eventName}
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
          imageUrl = {imagesrc}
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
            <Typography variant="body1" align="center" sx={{ ml: 1 }}>
              {date}
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
            <Typography variant="body1" align="center" sx={{ ml: 1 }}>
              {location}
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
        <Typography variant="subtitle1" align="left" sx={{ ml: 1 }}>
          {eventDescription}
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
        <ThemedButton
          variant="contained"
          disableElevation
          onClick={() => {
            toast.success("Event Joined!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/home");
          }}
        >
          Join
        </ThemedButton>
      </Box>

      <Outlet />
    </>
  );
}
