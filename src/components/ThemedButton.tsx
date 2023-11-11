import Button from "@mui/material/Button";

type ThemedButtonProps = {
  children?: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
};
export function ThemedButton({ children, variant }: ThemedButtonProps) {
  return <Button variant={variant}>{children}</Button>;
}
