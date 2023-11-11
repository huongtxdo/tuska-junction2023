import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

type ThemedCardProps = {
  children?: React.ReactNode;
};

export function ThemedCard({ children }: ThemedCardProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        borderRadius: "2rem",
        backgroundColor: theme.palette.secondary.main,
        padding: "1.5rem",
      }}
    >
      {children}
    </Box>
  );
}
