import { ThemedCard } from "@components/ThemedCard";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { EventCard } from "@components/EventCard";

export default function Events() {
  return (
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
      />
    </Box>
  );
}
