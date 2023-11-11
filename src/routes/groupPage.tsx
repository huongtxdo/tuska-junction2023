import { useState } from "react";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#EBE5F3",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  flexGrow: 1,
}));

function Group({ group, choosingGroup }: GroupComponentProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        px: 3,
        marginTop: 3,
        marginBottom: 1,
        display: "flex",
        flexDirection: "column",
        width: "fill",
        align: "center",
      }}
    >
      <Item>
        {group.name}
        <br />
        specialist: {group.specialist}
        <br />
        {group.date}
        <br />
        {group.time.map((time) => (
          <Button key={time} onClick={() => choosingGroup(group, time)}>
            {time}
          </Button>
        ))}
      </Item>
    </Box>
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
      <Typography variant="h5" align="center">
        Select your group
      </Typography>
      <Stack spacing={2}>
        {groupData.map((group) => (
          <Group key={group.name} group={group} choosingGroup={choosingGroup} />
        ))}
        {chosenGroup && (
          <Button>
            Continue with {chosenGroup.name} at {chosenTime}?
          </Button>
        )}
        <Button>No suitable time?</Button>
      </Stack>
    </Box>
  );
}
