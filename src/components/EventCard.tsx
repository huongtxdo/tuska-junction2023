import { ThemedCard } from "./ThemedCard";

import LocationOn from "@mui/icons-material/LocationOn";
import Event from "@mui/icons-material/Event";
import Person from "@mui/icons-material/Person";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type EventCardProps = {
  place: string;
  time: string;
  peopleAmount: string;
  title: string;
  description: string;
  path?: string;
  disabled?: boolean;
};

export function EventCard({
  place,
  time,
  peopleAmount,
  title,
  description,
  path,
  disabled,
}: EventCardProps) {
  return (
    <ThemedCard path={path} disabled={disabled}>
      <Box display="flex" flexDirection="row" gap="1rem" flexWrap="wrap">
        <Box display="flex" gap="2px">
          <LocationOn />
          {place}
        </Box>

        <Box display="flex" gap="2px">
          <Event />
          {time}
        </Box>

        <Box display="flex" gap="2px">
          <Person />
          {peopleAmount}
        </Box>
      </Box>

      <Box>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </ThemedCard>
  );
}
