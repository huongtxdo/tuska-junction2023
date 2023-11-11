import Button from "@mui/material/Button";

type ThemedButtonProps = {
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  disableElevation?: boolean;
};
export function ThemedButton({
  children,
  variant,
  disableElevation,
}: ThemedButtonProps) {
  return (
    <Button
      variant={variant}
      disableElevation={disableElevation}
      sx={{ borderRadius: "2rem", textTransform: "none" }}
    >
      {children}
    </Button>
  );
}
