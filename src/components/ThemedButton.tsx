import React from "react";
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
      sx={{
        borderRadius: "2rem",
        textTransform: "none",
        color: variant === "contained" ? "white" : "#1D1B20",
      }}
    >
      {children}
    </Button>
  );
}
