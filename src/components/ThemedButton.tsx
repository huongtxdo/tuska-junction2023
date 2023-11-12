import Button from "@mui/material/Button";

type ThemedButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  disabled?: boolean;
  disableElevation?: boolean;
};
export function ThemedButton({
  onClick,
  children,
  variant,
  disabled,
  disableElevation,
}: ThemedButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      disabled={disabled}
      disableElevation={disableElevation}
      sx={{ borderRadius: "2rem", textTransform: "none" }}
    >
      {children}
    </Button>
  );
}
