import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

import { ThemedButton } from "./ThemedButton";
import { ThemedCard } from "./ThemedCard";
import { Dispatch, SetStateAction } from "react";

type SessionQueryProps = {
  setShowFeedbackForm: Dispatch<SetStateAction<boolean>>;
};

export function SessionFeedbackForm({
  setShowFeedbackForm,
}: SessionQueryProps) {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ThemedButton
          onClick={() => setShowFeedbackForm(false)}
          variant="outlined"
          disableElevation
        >
          Skip
        </ThemedButton>
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          gap: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          align="center"
          sx={{ fontFamily: "Roboto", fontWeight: "Bold" }}
        >
          How was your session?
        </Typography>
        <ThemedCard>
          <Typography
            component="h1"
            variant="h6"
            align="center"
            sx={{ mt: 2, fontFamily: "Roboto", fontWeight: "Bold" }}
          >
            How are you feeling?
          </Typography>
          <Slider defaultValue={50} sx={{ mt: 2 }} aria-label="Default" />
          <Grid container>
            <Grid item xs>
              <Typography
                component="h1"
                variant="h6"
                sx={{ fontFamily: "Roboto", fontWeight: "Bold" }}
              >
                Worse
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="h1"
                variant="h6"
                sx={{ fontFamily: "Roboto", fontWeight: "Bold" }}
              >
                Better
              </Typography>
            </Grid>
          </Grid>
        </ThemedCard>
        <ThemedCard>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ mt: 2, fontFamily: "Roboto", fontWeight: "Bold" }}
          >
            Did you like this session?
          </Typography>
          <Grid container sx={{ mt: 2 }}>
            <Grid item xs>
              <ThemedButton
                onClick={() => setShowFeedbackForm(false)}
                variant="contained"
                disableElevation
              >
                No
              </ThemedButton>
            </Grid>
            <Grid item>
              <ThemedButton
                onClick={() => setShowFeedbackForm(false)}
                variant="contained"
                disableElevation
              >
                Yes
              </ThemedButton>
            </Grid>
          </Grid>
        </ThemedCard>
      </Box>
    </Container>
  );
}
