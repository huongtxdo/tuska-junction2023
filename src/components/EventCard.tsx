import { ThemedCard } from "./ThemedCard";
import { BasicImage } from "./BasicImage";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LocationOn from "@mui/icons-material/LocationOn";
import Event from "@mui/icons-material/Event";
import Person from "@mui/icons-material/Person";

type EventCardProps = {
  place: string;
  time: string;
  peopleAmount: string;
  title: string;
  description: string;
  imgSrc: string;
  path?: string;
  disabled?: boolean;
};

export function EventCard({
  place,
  time,
  peopleAmount,
  title,
  description,
  imgSrc,
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

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginTop={2}
        gap={1}
      >
        <Box>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <Box maxWidth="50%">
          <BasicImage imageUrl={imgSrc} borderRadiusIm={2} imageHeight={128} />
        </Box>
      </Box>
    </ThemedCard>
  );
}
