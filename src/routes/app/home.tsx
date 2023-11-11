import { ThemedButton } from "@components/ThemedButton";
import { ThemedCard } from "@components/ThemedCard";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { IconButton } from "@mui/material";
import Add from "@mui/icons-material/Add";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <Typography
        component="h1"
        variant="h4"
        sx={{
          fontWeight: "600",
          letterSpacing: "-0.05rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Hello, Roosa!
      </Typography>

      <ThemedCard>
        <Typography>Your future session</Typography>
        <Typography
          component="h2"
          variant="h4"
          sx={{ marginTop: "1rem", marginBottom: "1rem" }}
        >
          Mon, Aug 17 at 18:00
        </Typography>
        <ThemedButton variant="contained" disableElevation>
          See details
        </ThemedButton>
      </ThemedCard>

      <ThemedCard>
        <Typography component="h2" variant="h5">
          How are you feeling today?
        </Typography>
        <Slider />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Worse</Typography>
          <Typography>Better</Typography>
        </Box>
      </ThemedCard>

      <ThemedCard>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography component="h2" variant="h5">
            Add medicine
          </Typography>
          <IconButton>
            <Add />
          </IconButton>
        </Box>
      </ThemedCard>
    </Box>
  );
}
