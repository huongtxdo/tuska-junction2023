import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import More_Vert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Arrow_Back from '@mui/icons-material/ArrowBack';

import AccessibilityNew from "@mui/icons-material/AccessibilityNew";
import Home from "@mui/icons-material/Home";
import TrendingUp from "@mui/icons-material/TrendingUp";
import Person from "@mui/icons-material/Person";

import { BasicImage } from '../components/imageForLogin'
import { Outlet } from "react-router-dom";
import { NavigationButton } from "../components/IconButtonWithText";
import { Box, Container } from "@mui/material";
import { ButtonBar } from '@components/ButtonBox'

export default function EventView() {
  return (
    <>
    <ButtonBar></ButtonBar>
    <Box
        sx={{
            marginTop: 2,
            display: 'flex',
            justifyContent: "flex-start"
          }}>
        <Typography component="h1" variant="h5" align='left' sx={{ mt: 6 }}>
            Template Name
          </Typography>    
    </Box>
    <Box
        sx={{
            marginTop: 2,
            display: 'flex',
            justifyContent: "flex-start"
          }}>
        <BasicImage imageUrl="https://s3-eu-west-1.amazonaws.com/manxradionews/861807-1.jpg" imageHeight={300} borderRadiusIm={8}/>
    </Box>
    <Box
        sx={{
            marginTop: 2,
            display: 'flex',
            justifyContent: "flex-start"
          }}>
         <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        >
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
            sx={{ mr: 2 }}
          >
            <Arrow_Back />
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
            sx={{ ml: 2 }}
          >
            <More_Vert />
          </IconButton>
        </Toolbar>
         
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
