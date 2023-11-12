import Box from '@mui/material/Box';
import More_Vert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Arrow_Back from '@mui/icons-material/ArrowBack';
import BookmarkEmpty from '@mui/icons-material/BookmarkBorder'
import BookmarkFull from '@mui/icons-material/Bookmark'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ButtonBar() {
  const [showBookmarkState, setBookmarkState] = useState(false);
  const navigate = useNavigate()

  return (
    <Box style={{
      marginTop: 10,
      display: "flex",
      justifyContent: "space-between",
    }}>
          <IconButton onClick={() => navigate("/events")}
            size="medium"
            edge="start"
            color="inherit"
            aria-label="arrow_back"
          >
            <Arrow_Back />
          </IconButton>
          <Box>
          {showBookmarkState ? (
          <IconButton
            onClick={() => setBookmarkState(false)}
            size="medium"
            edge="start"
            color="inherit"
            aria-label="bookmarkFull"
          >
            <BookmarkFull />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => setBookmarkState(true)}
            size="medium"
            edge="start"
            color="inherit"
            aria-label="bookmarkEmpty"
          >
            <BookmarkEmpty />
          </IconButton>
        )}
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="settings"
          >
            <More_Vert />
          </IconButton>
          </Box>
    </Box>
  );
}