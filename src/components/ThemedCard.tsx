import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

type ThemedCardProps = {
  children?: React.ReactNode;
  padding?: string;
};

export function ThemedCard({ children, padding = "1.5rem" }: ThemedCardProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderRadius: "2rem",
        backgroundColor: theme.palette.secondary.main,
        padding,
      }}
    >
      {children}
    </Box>
  );
}
