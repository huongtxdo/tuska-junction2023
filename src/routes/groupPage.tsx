import { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { ThemedCard } from "@components/ThemedCard";
import { ThemedButton } from "@components/ThemedButton";

type GroupProp = {
  name: string;
  specialist: string;
  date: string;
  time: string[];
};

type GroupComponentProps = {
  group: GroupProp;
  choosingGroup: (group: GroupProp, time: string) => void;
};

function Group({ group, choosingGroup }: GroupComponentProps) {
  return (
    <ThemedCard>
      <Typography component="h2" variant="h5">
        {group.name}
      </Typography>
      Specialist: {group.specialist}
      <p style={{ fontWeight: "bold" }}>{group.date}</p>
      {group.time.map((time) => (
        <ThemedButton
          variant="contained"
          key={time}
          onClick={() => choosingGroup(group, time)}
        >
          {time}
        </ThemedButton>
      ))}
    </ThemedCard>
  );
}

export default function GroupPage() {
  const [chosenGroup, setChosenGroup] = useState<GroupProp | null>(null);
  const [chosenTime, setChosenTime] = useState<string | null>(null);

  const groupData = [
    {
      name: "Group A",
      specialist: "Hanna Makinen",
      date: "Every Thursday",
      time: ["12:00", "16:00", "19:00"],
    },
    {
      name: "Group B",
      specialist: "Hanna Makinen",
      date: "Every Tuesday",
      time: ["12:00", "16:00", "19:00", "20:00"],
    },
    {
      name: "Group C",
      specialist: "Hanna Makinen",
      date: "Every Saturday",
      time: ["12:00", "16:00", "19:00"],
    },
  ];

  const choosingGroup = (group: GroupProp, time: string) => {
    setChosenTime(time);
    setChosenGroup(group);
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
        component="h1"
        variant="h4"
        sx={{
          fontWeight: "600",
          letterSpacing: "-0.05rem",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Select your group
      </Typography>
      <Stack spacing={2}>
        {groupData.map((group) => (
          <Group key={group.name} group={group} choosingGroup={choosingGroup} />
        ))}
        {chosenGroup && (
          <ThemedButton variant="outlined">
            Continue with {chosenGroup.name} at {chosenTime}?
          </ThemedButton>
        )}
        <ThemedButton variant="outlined">No suitable time?</ThemedButton>
      </Stack>
    </Box>
  );
}
