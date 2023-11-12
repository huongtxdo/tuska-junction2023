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
    <Container component="main">
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
          width: "100%"
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          align="center"
        >
          How was your session?
        </Typography>
        <ThemedCard>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ mt: 2 }}
          >
            How are you feeling?
          </Typography>
          <Slider defaultValue={50} sx={{ mt: 2 }} aria-label="Default" />
          <Grid container>
            <Grid item xs>
              <Typography
                component="h1"
                variant="h6"
              >
                Worse
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="h1"
                variant="h6"
              >
                Better
              </Typography>
            </Grid>
          </Grid>
        </ThemedCard>
        <Box sx={{width: "100%"}}>
        <ThemedCard>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            sx={{ mt: 2, fontFamily: "Roboto", fontWeight: "Bold",  }}
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
      </Box>
    </Container>
  );
}
