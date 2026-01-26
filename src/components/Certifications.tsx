import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import { Certifications } from "../resources/data.ts";

export default function CertificationsSection() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
        Certifications
      </Typography>

      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Credentials and professional training.
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 3,
        }}
      >
        {Certifications.map((cert) => {
          return (
            <Card
              key={cert.name}
              variant="outlined"
              sx={{
                borderRadius: 3,
                backgroundColor: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.12)",
                transition: "transform 160ms ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                  {/* BIG LOGO (left) */}
                  <Box
                    sx={{
                      width: 84,
                      height: 84,
                      borderRadius: 3,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      flexShrink: 0,
                    }}
                  >
                    <Box
                      component="img"
                      src={`/${cert.logo}`}
                      alt={`${cert.name} logo`}
                      sx={{ width: 80, height: 80, objectFit: "contain" }}
                    />
                  </Box>

                  <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                    {/* Title takes full width */}
                    <Typography sx={{ fontWeight: 800, lineHeight: 1.2 }}>{cert.name}</Typography>

                    {/* Issuer/date left + PDF right */}
                    <Box
                      sx={{
                        mt: 0.8,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Box>
                        <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                          {cert.issuer}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.85 }}>
                          {new Date(cert.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                          })}
                        </Typography>
                      </Box>

                      <Button
                        size="small"
                        variant="contained"
                        href={`/${cert.fileName}`}
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                          borderRadius: 999,
                          textTransform: "none",
                          fontWeight: 700,
                          px: 2,
                          flexShrink: 0,
                        }}
                      >
                        PDF
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
