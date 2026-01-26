import React from "react";
import { TextField, Typography, Box, Button, Stack } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { Info } from "../resources/data.ts";

export default function ContactForm() {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const messageIsValid = message.trim().length > 0;

  const mailtoHref = React.useMemo(() => {
    const finalSubject = subject.trim() || "Portfolio contact";
    const body = message.trim();

    return `mailto:${Info.email}?subject=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(body)}`;
  }, [subject, message]);

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        py: 6,
        mt: 2,
        borderRadius: 3,
        px: { xs: 2, sm: 3 },
        backgroundColor: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }} gutterBottom>
        Contact
      </Typography>

      <Typography color="text.secondary" sx={{ maxWidth: 720, mb: 3 }}>
        Send me a message and I’ll get back to you.
      </Typography>

      <Box component="form" sx={{ maxWidth: 720 }} onSubmit={(e) => e.preventDefault()}>
        <Stack spacing={2}>
          <TextField
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            fullWidth
          />

          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            required
            multiline
            minRows={5}
            error={!messageIsValid && message.length > 0}
            helperText={!messageIsValid && message.length > 0 ? "Message is required" : " "}
          />

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              component="a"
              href={messageIsValid ? mailtoHref : undefined}
              startIcon={<SendIcon />}
              variant="contained"
              disabled={!messageIsValid}
              sx={{
                borderRadius: 999,
                textTransform: "none",
                fontWeight: 700,
                transition: "transform 160ms ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              Send Email
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
