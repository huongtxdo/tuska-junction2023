import { useState } from "react";
import CodeInput from "react-code-input";
import { useNavigate } from "react-router";

import { ThemedButton } from "@components/ThemedButton";
import { BasicImage } from "@components/BasicImage";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <BasicImage imageUrl="/logo.png" imageHeight={250} borderRadiusIm={0} />
      <Typography
        component="h1"
        variant="h4"
        textAlign="center"
        sx={{ fontWeight: "600" }}
      >
        Welcome to ChroniConnect
      </Typography>
      <Typography component="h1" variant="body1" textAlign="center">
        Please, enter the code your doctor provided
        (enter any code for the demo):
      </Typography>
      <CodeInput
        name="code"
        type="text"
        fields={6}
        inputMode="latin"
        forceUppercase
        autoFocus
        disabled={loading}
        onChange={(value) => {
          if (value.length === 6) {
            setLoading(true);
            setTimeout(() => {
              navigate("/groups");
            }, 1000);
          }
        }}
      />
      <ThemedButton>How do I get a code?</ThemedButton>
    </Container>
  );
}
