import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider'
import Grid from '@mui/material/Grid'
import '@fontsource/roboto/300.css';

import { ThemedButton } from './ThemedButton';
import { ThemedCard } from './ThemedCard';


export function SessionQuery() {
  return (
    <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            justifyContent: "flex-end"
          }}
        >
          <ThemedButton variant='outlined' disableElevation>Skip</ThemedButton>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >  
          <Typography component="h1" variant="h3" align='center' sx={{ mt: 6 , fontFamily: 'Roboto', fontWeight: 'Bold'}}>
            How was your session?
          </Typography>
        <ThemedCard>
          <Box
             sx={{
             mt: 4,
             borderRadius: 8,
             bgcolor: '#6D6F6F',
            }}
           >
            <Typography component="h1" variant="h6" align='center' sx={{ mt: 2 , fontFamily: 'Roboto', fontWeight: 'Bold'}}>
             How are you feeling?   
            </Typography>
            <Slider defaultValue={50} sx={{ mt: 2 , mb: 2}} aria-label="Default" />
            <Grid container>
              <Grid item xs>
                <Typography component="h1" variant="h6" sx={{ mt: 2 , mb: 2, mx: 2, fontFamily: 'Roboto', fontWeight: 'Bold'}}>
                Worse   
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h6" sx={{ mt: 2 , mb: 2, mx: 2, fontFamily: 'Roboto', fontWeight: 'Bold' }}>
                Better 
                </Typography>
              </Grid>
            </Grid>
           </Box>
        </ThemedCard>
        <ThemedCard>
           <Box
             sx={{
             mt: 4,
             borderRadius: 8,
             bgcolor: '#6D6F6F',
            }}
           >
            <Typography component="h1" variant="h4" align='center' sx={{ mt: 2 , fontFamily: 'Roboto', fontWeight: 'Bold'}}>
             Did you like this session?  
            </Typography>
            <Grid container>
              <Grid item xs>
                <ThemedButton variant="contained" disableElevation>
                Join
                </ThemedButton>
              </Grid>
              <Grid item>
                <ThemedButton variant="contained" disableElevation>
                 Join
                </ThemedButton>
              </Grid>
            </Grid>
            </Box>
        </ThemedCard>  
          </Box>
      </Container>
  );
};