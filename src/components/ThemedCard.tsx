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
        backgroundColor: theme.palette.primary.main,
        padding: "1rem",
      }}
    >
      {children}
    </Box>
  );
}
