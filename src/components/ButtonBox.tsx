import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import More_Vert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Arrow_Back from '@mui/icons-material/ArrowBack';

export function ButtonBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
  );
}