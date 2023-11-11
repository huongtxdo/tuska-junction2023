
import {BasicImage} from '../components/login'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function Login() {
  return (
    <div>
        <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        <BasicImage
            imageUrl= "https://icons.iconarchive.com/icons/iconarchive/dogecoin-to-the-moon/512/Doge-icon.png"
        />
          <Typography component="h1" variant="h4" sx={{ mt: 2 }}>
            Welcome to Tuska
          </Typography>
          <Typography component="h1" variant="h6" sx={{ mt: 6 }}>
            Please enter the code your doctor provided you with:
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="AuthCode"
              label="Authentification Code"
              name="AuthCode"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Container>
      
    </div>
  );
};
