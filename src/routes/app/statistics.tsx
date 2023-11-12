import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";

import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from "../../components/BasicImage";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function StatisticsView() {
  return (
    <>
      <Box
        sx={{
          marginTop: 4,
        }}
      >
        <Typography variant="h5" align="center">
          Medicine Intake
        </Typography>
        <ButtonGroup
          aria-label="medium secondary button group"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
            marginBottom: 20,
          }}
        >
          <ThemedButton>Day</ThemedButton>,<ThemedButton>Week</ThemedButton>,
          <ThemedButton>Month</ThemedButton>,<ThemedButton>Year</ThemedButton>
        </ButtonGroup>

        <BasicImage
          imageUrl="/graph1.png"
          imageHeight={200}
          borderRadiusIm={10}
          imageContain
        ></BasicImage>
      </Box>

      <Box
        sx={{
          marginTop: 6,
        }}
      >
        <Typography variant="h5" align="center">
          Pain Rate
        </Typography>
        <ButtonGroup
          aria-label="medium secondary button group"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 15,
            marginBottom: 20,
          }}
        >
          <ThemedButton>Day</ThemedButton>,<ThemedButton>Week</ThemedButton>,
          <ThemedButton>Month</ThemedButton>,<ThemedButton>Year</ThemedButton>
        </ButtonGroup>

        <BasicImage
          imageUrl="/graph2.jpg"
          imageHeight={200}
          borderRadiusIm={10}
          imageContain
        ></BasicImage>
      </Box>

      <Outlet />
    </>
  );
}
