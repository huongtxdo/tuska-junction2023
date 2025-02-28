import { ThemedCard } from "@components/ThemedCard";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/icons-material/Menu";
import Search from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { EventCard } from "@components/EventCard";
import { useContext, useEffect, useRef } from "react";
import { AppState } from "../../context/app";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Events() {
  const { firstSessionCompleted } = useContext(AppState);
  const shownToast = useRef(false);

  useEffect(() => {
    if (!shownToast.current && !firstSessionCompleted) {
      toast.info(
        "You can view events, but to sign up and visit them you need to visit your first group session.",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      shownToast.current = true;
    }
  }, [firstSessionCompleted]);

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
          imgSrc="/cruise.jpg"
          disabled={!firstSessionCompleted}
        />

        <EventCard
          place="Helsinki"
          time="14/11, 16:00"
          peopleAmount="9"
          title="Mini Golf"
          description="Hole in one!"
          path="/events/mini-golf"
          imgSrc="/passat.jpg"
          disabled={!firstSessionCompleted}
        />

        <EventCard
          place="Helsinki"
          time="21/11, 21:00"
          peopleAmount="12"
          title="Animal Petting"
          description="Petting Animals"
          path="/events/lammassaari "
          imgSrc="/petting.jpg"
          disabled={!firstSessionCompleted}
        />
      </Box>
    </>
  );
}
