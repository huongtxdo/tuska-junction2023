import { ThemedCard } from "@components/ThemedCard";
import Box from "@mui/material/Box";
import { Stack, Typography } from "@mui/material";
import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from "@components/BasicImage";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppState } from "../../context/app";

type eventType = {
  name: string;
  date: string;
};

type userDataType = {
  name: string;
  phone: string;
  address: string;
  events: eventType[];
};

export default function Function() {
  const { setChosenGroup, setChosenTime, setFirstSessionCompleted } =
    useContext(AppState);
  const [userData, setUserData] = useState<userDataType | null>({
    name: "Roosa",
    phone: "123-456-456",
    address: "Kaapelinkatu 15",
    events: [
      { name: "Movie night", date: "Tomorrow, 19:00" },
      { name: "Pool night", date: "12 Nov, 18:00" },
    ],
  });
  const navigate = useNavigate();

  return (
    <>
      {userData ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <ThemedCard>
            <Stack
              direction="row"
              spacing={2}
              style={{ justifyContent: "space-around" }}
            >
              <Box maxWidth="50%">
                <BasicImage
                  imageUrl="/cat.jpg"
                  imageHeight={100}
                  borderRadiusIm={5}
                />
              </Box>

              <Stack spacing={2}>
                <Typography
                  component="h2"
                  variant="h5"
                  sx={{
                    fontWeight: "600",
                    letterSpacing: "-0.05rem",
                    marginBottom: "1rem",
                  }}
                >
                  {userData.name}
                </Typography>
                <Typography>{userData.address}</Typography>
                <Typography>{userData.phone}</Typography>
              </Stack>
            </Stack>
          </ThemedCard>
          <Stack spacing={2}>
            {userData.events.map((event) => (
              <ThemedButton
                key={event.name}
                variant="contained"
                onClick={() => navigate("/events")}
              >
                <Typography>
                  {event.name} <br />
                  {event.date}
                </Typography>
              </ThemedButton>
            ))}
            <ThemedButton
              variant="outlined"
              onClick={() => {
                setUserData(null);
                setChosenGroup && setChosenGroup(null);
                setChosenTime && setChosenTime(null);
                setFirstSessionCompleted && setFirstSessionCompleted(false);
              }}
            >
              <Typography>Delete account</Typography>
            </ThemedButton>
          </Stack>
        </Box>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
