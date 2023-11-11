import { ThemedCard } from "@components/ThemedCard";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { EventCard } from "@components/EventCard";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useContext } from "react";
import { AppState } from "./layout";
import { useState } from "react";

export default function Events() {
  const { firstSessionCompleted } = useContext(AppState);
  const [showingNotification, setShowingNotification] = useState(
    !firstSessionCompleted
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <ThemedCard padding="0.5rem">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton>
              <Menu />
            </IconButton>
            <InputBase placeholder="What's on your mind?" fullWidth />

            <IconButton>
              <Search />
            </IconButton>
          </Box>
        </ThemedCard>

        <EventCard
          place="Helsinki"
          time="Tomorrow, 19:00"
          peopleAmount="15"
          title="Movie Night"
          description="Organizer: Finnkino"
          path="/events/pool-night"
          disabled={!firstSessionCompleted}
        />
      </Box>
      <Snackbar
        open={showingNotification}
        autoHideDuration={6000}
        onClose={() => setShowingNotification(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ marginBottom: 8 }}
      >
        <Alert
          onClose={() => setShowingNotification(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          You can view events, but to sign up and visit them you need to visit
          your first group session.
        </Alert>
      </Snackbar>
    </>
  );
}
