import Button from "@mui/material/Button";

type ThemedButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  disableElevation?: boolean;
};
export function ThemedButton({
  onClick,
  children,
  variant,
  disableElevation,
}: ThemedButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disableElevation={disableElevation}
      sx={{ borderRadius: "2rem", textTransform: "none" }}
    >
      {children}
    </Button>
  );
}
