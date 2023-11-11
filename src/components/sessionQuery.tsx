import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider'
import Grid from '@mui/material/Grid'


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
          <Button variant="outlined" sx={{ my: 1, mx: 1.5 }} >Skip</Button>
        </Box>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >   
          <Typography component="h1" variant="h3" align='center' sx={{ mt: 6 }}>
            How was your session?
          </Typography>
          <Box
             sx={{
             mt: 4,
             borderRadius: 8,
             bgcolor: '#6D6F6F',
            }}
           >
            <Typography component="h1" variant="h6" align='center' sx={{ mt: 2 }}>
             How are you feeling?   
            </Typography>
            <Slider defaultValue={50} sx={{ mt: 2 , mb: 2}} aria-label="Default" />
            <Grid container>
              <Grid item xs>
                <Typography component="h1" variant="h6" sx={{ mt: 2 , mb: 2, mx: 2}}>
                Worse   
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h6" sx={{ mt: 2 , mb: 2, mx: 2 }}>
                Better 
                </Typography>
              </Grid>
            </Grid>
           </Box>
           <Box
             sx={{
             mt: 4,
             borderRadius: 8,
             bgcolor: '#6D6F6F',
            }}
           >
            <Typography component="h1" variant="h4" align='center' sx={{ mt: 2 }}>
             Did you like this session?  
            </Typography>
            <Grid container>
              <Grid item xs>
                <Button
                 type="submit"
                 variant="contained"
                 sx={{ mt: 3, mb: 2, mx:4 }}
                >
                No 
                </Button>
              </Grid>
              <Grid item>
                <Button
                 type="submit"
                 variant="contained"
                 sx={{ mt: 3, mb: 2, mx:4  }}
                >
                Yes
                </Button>
              </Grid>
            </Grid>
            </Box>  
          </Box>
      </Container>
  );
};