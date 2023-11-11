import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router";

type ThemedCardProps = {
  children?: React.ReactNode;
  padding?: string;
  disabled?: boolean;
  path?: string;
};

export function ThemedCard({
  children,
  disabled,
  path,
  padding = "1.5rem",
}: ThemedCardProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => (path && !disabled ? navigate(path) : undefined)}
      sx={{
        borderRadius: "2rem",
        backgroundColor: disabled ? "gray" : theme.palette.secondary.main,
        padding,
      }}
    >
      {children}
    </Box>
  );
}
