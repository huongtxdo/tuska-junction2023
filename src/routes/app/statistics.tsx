import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';

import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Home from "@mui/icons-material/Home";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Person from "@mui/icons-material/Person";

import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from '../../components/imageForLogin'
import { Outlet } from "react-router-dom";
import { NavigationButton } from "../../components/IconButtonWithText";
import { Box, Container } from "@mui/material";

export default function StatisticsView() {
  return (
    <>
    <Box
        sx={{
            marginTop: 4,
          }}>
        <Typography variant="h5" align='center'>
            Medicine Intake
        </Typography> 
        <ButtonGroup aria-label="medium secondary button group" style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
          marginBottom: 20
        }}>
          <ThemedButton>Day</ThemedButton>,
          <ThemedButton>Week</ThemedButton>,
          <ThemedButton>Month</ThemedButton>,
          <ThemedButton>Year</ThemedButton>
        </ButtonGroup>
         
        <BasicImage imageUrl="/graph1.png" imageHeight={200} borderRadiusIm={10} ></BasicImage>

    </Box>

    <Box
        sx={{
            marginTop: 6,
          }}>
        <Typography variant="h5" align='center'>
          Pain Rate
        </Typography> 
        <ButtonGroup aria-label="medium secondary button group" style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 15,
          marginBottom: 20
        }}>
          <ThemedButton>Day</ThemedButton>,
          <ThemedButton>Week</ThemedButton>,
          <ThemedButton>Month</ThemedButton>,
          <ThemedButton>Year</ThemedButton>
        </ButtonGroup>
         
        <BasicImage imageUrl="/graph2.jpg" imageHeight={200} borderRadiusIm={10} ></BasicImage>

    </Box>

    <Outlet />
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Container maxWidth="xs">
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <NavigationButton
            icon={<AccessibilityNew />}
            text="Events"
            path="/events"
          />
          <NavigationButton icon={<Home />} text="Home" path="/home" />
          <NavigationButton icon={<TrendingUp />} text="Pain" path="/pain" />
          <NavigationButton
            icon={<Person />}
            text="Profile"
            path="/profile"
          />
        </Toolbar>
      </Container>
    </AppBar>
  </>
  );
};