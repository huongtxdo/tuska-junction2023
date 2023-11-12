import { useLocation, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

type NavigationButton = {
  icon: React.ReactNode;
  text: string;
  path: string;
};

export function NavigationButton({ icon, text, path }: NavigationButton) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <IconButton
      style={{
        display: "flex",
        flexDirection: "column",
        color: location.pathname === path ? "white" : "black",
      }}
      onClick={() => navigate(path)}
    >
      {icon}
      <Typography variant="body2">{text}</Typography>
    </IconButton>
  );
}
