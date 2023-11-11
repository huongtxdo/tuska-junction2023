import Box from '@mui/material/Box';
import More_Vert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Arrow_Back from '@mui/icons-material/ArrowBack';

export function ButtonBar() {
  return (
    <Box style={{
      marginTop: 10,
      display: "flex",
      justifyContent: "space-between",
    }}>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
          >
            <Arrow_Back />
          </IconButton>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
          >
            <More_Vert />
          </IconButton>
    </Box>
  );
}