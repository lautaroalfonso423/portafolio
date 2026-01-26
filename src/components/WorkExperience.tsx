import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { Works } from "../resources/data.ts"

export default function WorkExperience() {
    return (
        <Box id="experience" sx={{ py: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
                Work Experience
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 3 }}>
                Roles I’ve held and the kind of impact I focused on.
            </Typography>

            <Stack spacing={3}>
                {Works.map((exp) => (
                    <Card
                        key={`${exp.company}-${exp.role}-${exp.start}`}
                        variant="outlined"
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: 4,
                            borderColor: "rgba(255,255,255,0.10)",
                            background:
                                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                            backdropFilter: "blur(10px)",

                            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                            transition: "transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease",

                            // left accent bar
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                width: 4,
                                background: "linear-gradient(180deg, rgba(144,202,249,1), rgba(144,202,249,0))",
                                opacity: 0.7,
                            },

                            // soft glow hover
                            "&:hover": {
                                transform: "translateY(-4px)",
                                borderColor: "rgba(144,202,249,0.35)",
                                boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
                            },

                            // subtle top highlight
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(600px circle at 20% 0%, rgba(144,202,249,0.10), transparent 40%)",
                                pointerEvents: "none",
                            },
                        }}
                    >
                        <CardContent>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: 2,
                                    flexWrap: "wrap",
                                }}
                            >
                                <Box sx={{ minWidth: 0 }}>
                                    <Typography sx={{ fontWeight: 900, fontSize: "1.05rem" }}>
                                        {exp.role}
                                    </Typography>

                                    <Box sx={{ mt: 0.6, display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                                        {exp.logo ? (
                                            <Box
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: "50%",
                                                    backgroundColor: "rgba(255,255,255,0.8)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    overflow: "hidden",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                <Box
                                                    component="img"
                                                    src={exp.logo}
                                                    alt={`${exp.client} logo`}
                                                    sx={{
                                                        width: "100%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </Box>
                                        ) : null}

                                        {exp.client ? (
                                            <Box
                                                sx={{
                                                    px: 1.1,
                                                    py: 0.35,
                                                    borderRadius: 999,
                                                    fontSize: 13,
                                                    fontWeight: 700,
                                                    border: "1px solid rgba(144,202,249,0.25)",
                                                    backgroundColor: "rgba(144,202,249,0.10)",
                                                    color: "rgba(144,202,249,0.95)",
                                                    whiteSpace: "nowrap",
                                                }}
                                            >
                                                {exp.client}
                                            </Box>
                                        ) : null}

                                        <Typography color="text.secondary" sx={{ opacity: 0.9 }}>
                                            {exp.company}
                                        </Typography>
                                    </Box>

                                </Box>

                                <Box
                                    sx={{
                                        px: 1.4,
                                        py: 0.55,
                                        borderRadius: 999,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: "text.secondary",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                        whiteSpace: "nowrap",
                                        opacity: 0.95,
                                    }}
                                >
                                    {exp.start} — {exp.end}
                                </Box>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Box
                                    component="ul"
                                    sx={{
                                        m: 0,
                                        pl: 2.2,
                                        color: "text.secondary",
                                        "& li": { mb: 0.8, lineHeight: 1.6 },
                                        "& li:last-child": { mb: 0 },
                                    }}
                                >
                                    {exp.highlights.map((h) => (
                                        <li key={h}>
                                            <Typography component="span" color="text.secondary">
                                                {h}
                                            </Typography>
                                        </li>
                                    ))}
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}
