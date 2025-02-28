import { useContext } from "react";
import { AppState } from "../context/app";
import { useNavigate } from "react-router";
import { ThemedCard } from "@components/ThemedCard";
import { ThemedButton } from "@components/ThemedButton";
import { Box, Typography, Stack } from "@mui/material";

export type GroupProp = {
  name: string;
  specialist: string;
  peopleAmount: string;
  date: string;
  nextDate: string;
  time: string[];
};

type GroupComponentProps = {
  group: GroupProp;
  chosenGroup: GroupProp | null;
  chosenTime: string | null;
  choosingGroup: (group: GroupProp, time: string) => void;
};

function Group({
  group,
  chosenGroup,
  chosenTime,
  choosingGroup,
}: GroupComponentProps) {
  return (
    <ThemedCard>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6">{group.name}</Typography>
        <Typography variant="body2">{group.peopleAmount}</Typography>
      </Box>

      <Typography variant="body2" marginBottom={2}>
        Specialist: {group.specialist}
      </Typography>
      <Typography marginBottom={1}>{group.date}</Typography>
      <Box display="flex" flexWrap="wrap" gap={1}>
        {group.time.map((time) => (
          <ThemedButton
            variant={
              chosenGroup?.name === group.name && chosenTime === time
                ? "contained"
                : "outlined"
            }
            key={time}
            disableElevation
            onClick={() => choosingGroup(group, time)}
          >
            {time}
          </ThemedButton>
        ))}
      </Box>
    </ThemedCard>
  );
}

export default function GroupPage() {
  const { chosenGroup, chosenTime, setChosenGroup, setChosenTime } =
    useContext(AppState);
  const navigate = useNavigate();

  const groupData = [
    {
      name: "Group A",
      specialist: "Mikko Kivioja",
      peopleAmount: "13 of 15 people",
      date: "Every Thursday",
      nextDate: "Thu, Nov 16",
      time: ["12:00", "16:00", "19:00"],
    },
    {
      name: "Group B",
      specialist: "Hanna Mäkinen",
      peopleAmount: "10 of 15 people",
      date: "Every Tuesday",
      nextDate: "Tue, Nov 14",
      time: ["12:00", "16:00", "19:00", "20:00"],
    },
    {
      name: "Group C",
      specialist: "Saara Karhumaa",
      peopleAmount: "11 of 15 people",
      date: "Every Saturday",
      nextDate: "Sat, Nov 18",
      time: ["12:00", "16:00", "19:00"],
    },
  ] satisfies GroupProp[];

  const choosingGroup = (group: GroupProp, time: string) => {
    setChosenTime && setChosenTime(time);
    setChosenGroup && setChosenGroup(group);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        px: 3,
        marginTop: 3,
        marginBottom: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="body1"
        align="center"
        marginTop={2}
        marginBottom={2}
        sx={{ fontWeight: "600" }}
      >
        Select your group
      </Typography>
      <Stack spacing={2}>
        {groupData.map((group) => (
          <Group
            key={group.name}
            group={group}
            chosenGroup={chosenGroup}
            chosenTime={chosenTime}
            choosingGroup={choosingGroup}
          />
        ))}
        <ThemedButton
          disabled={!chosenGroup}
          variant="contained"
          onClick={() => navigate("/home")}
        >
          {chosenGroup
            ? `Continue with ${chosenGroup.name} at ${chosenTime}?`
            : "Please select a group"}
        </ThemedButton>
        <ThemedButton variant="text">No suitable time?</ThemedButton>
      </Stack>
    </Box>
  );
}
