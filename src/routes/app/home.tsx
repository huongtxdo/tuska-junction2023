import { ThemedButton } from "@components/ThemedButton";
import { ThemedCard } from "@components/ThemedCard";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { IconButton } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import { AppState } from "../../context/app";
import { SessionFeedbackForm } from "@components/SessionFeedbackForm";

export default function Home() {
  const {
    firstSessionCompleted,
    setFirstSessionCompleted,
    chosenGroup,
    chosenTime,
  } = useContext(AppState);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      {showFeedbackForm ? (
        <>
          <SessionFeedbackForm
            setShowFeedbackForm={setShowFeedbackForm}
          ></SessionFeedbackForm>
        </>
      ) : (
        <>
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

          {chosenGroup && (
            <ThemedCard>
              <Typography>
                Your {firstSessionCompleted ? "previous" : "future"} session
              </Typography>

              <Typography
                component="h2"
                variant="h4"
                sx={{ marginTop: "1rem", marginBottom: "1rem" }}
              >
                {chosenGroup.nextDate} at {chosenTime}
              </Typography>
              <Box display="flex" gap="1rem">
                <ThemedButton variant="contained" disableElevation>
                  See details
                </ThemedButton>
                {!firstSessionCompleted && (
                  <ThemedButton
                    onClick={() => {
                      setFirstSessionCompleted &&
                        setFirstSessionCompleted(true);
                      setShowFeedbackForm(true);
                    }}
                    variant="outlined"
                    disableElevation
                  >
                    Review session
                  </ThemedButton>
                )}
              </Box>
            </ThemedCard>
          )}

          <ThemedCard>
            <Typography component="h2" variant="h5">
              How are you feeling today?
            </Typography>
            <Slider defaultValue={50} />
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
        </>
      )}
    </Box>
  );
}
