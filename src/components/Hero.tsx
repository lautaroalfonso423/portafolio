import {Box, Button, Stack, Typography} from "@mui/material";
import {Info, SkillCategories} from "../resources/data.ts";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SkillsSection from "./SkillsSection.tsx";
import React from "react";

export default function Hero() {
    const pSx = {
        mt: 2,
        lineHeight: 1.85,
        fontSize: "1.05rem",
        textAlign: { xs: "left", md: "justify" },
        textJustify: "inter-word",
        hyphens: "auto",
        opacity: 0.92,
    };
    const btnSx = {
        borderRadius: 999,
        textTransform: "none",
        fontWeight: 700,
        transition: "transform 160ms ease",
        "&:hover": { transform: "translateY(-2px)" },
    };
    const role = useTypewriter(["Backend Software Engineer", "Full-Stack Developer", "Scrum Master"]);

    return (
        <Box sx={{ pt: 6, position: "relative" }}>
            <Box
                aria-hidden
                sx={{
                    position: "absolute",
                    width: 520,
                    height: 520,
                    filter: "blur(100px)",
                    opacity: 0.25,
                    background:
                        "radial-gradient(circle, rgba(25,118,210,1), rgba(25,118,210,0))",
                    top: -180,
                    left: -180,
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />

            <Box sx={{ position: "relative", zIndex: 1 }}>

                <Stack
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    sx={{ mb: 4 }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{ fontWeight: 800, letterSpacing: -0.5}}
                    >
                        {Info.name}
                    </Typography>

                    <Box
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 0.5,
                            borderRadius: 999,
                            border: "1px solid rgba(46, 204, 113, 0.35)",
                            backgroundColor: "rgba(46, 204, 113, 0.12)",
                        }}
                    >
                        <Box
                            sx={{
                                width: 10,
                                height: 10,
                                borderRadius: "50%",
                                backgroundColor: "#2ecc71",
                                boxShadow: "0 0 12px rgba(46, 204, 113, 0.6)",
                            }}
                        />
                        <Typography variant="caption" sx={{ color: "#9ef5c2", fontWeight: 700 }}>
                            Available to work
                        </Typography>
                    </Box>
                </Stack>
                <Box sx={{ mt: 1, display: "flex", alignItems: "center", gap: 1.5, flexWrap: "wrap" }}>
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            minHeight: 30,
                            fontWeight: 400,
                            fontSize: { xs: 20, sm: 24 },
                            letterSpacing: -0.2,
                            color: "text.primary",
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                background: "linear-gradient(90deg, rgba(120,220,255,1), rgba(120,255,200,0.9))",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                color: "transparent",
                            }}
                        >
                            {role}
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                display: "inline-block",
                                height: "1.4rem",
                                width: "0.3rem",
                                borderRight: "2px solid rgba(200,200,200,0.5)",
                                animation: "blink 1.1s steps(1) infinite",
                                "@keyframes blink": { "50%": { opacity: 0 } },
                            }}
                        />
                    </Typography>
                </Box>

                <Box sx={{ mt: 1, px: 1.2, py: 0.45, borderRadius: 999, fontSize: 13, display: "inline-flex", alignItems: "center",
                    border: "1px solid rgba(255,255,255,0.12)", backgroundColor: "rgba(255,255,255,0.04)",
                    color: "text.secondary", whiteSpace: "nowrap", opacity: 0.9 }}>
                    Lisbon, Portugal 🇵🇹
                </Box>

                <Box sx={{ mt: 2 }}>
                    <Typography
                        sx={pSx}
                        color="text.secondary"
                    >
                        Hello there, I’m a software engineer who enjoys building full-stack applications and scalable backend
                        services — from clean APIs and data pipelines to modern, responsive UIs.
                    </Typography>

                    <Typography
                        sx={pSx}
                        color="text.secondary"
                    >
                        My work is mainly on distributed systems in production, focusing on performance, reliability,
                        and developer experience. I like solving real problems, improving systems over time, and
                        keeping things simple and maintainable.
                    </Typography>

                    <Typography
                        sx={pSx}
                        color="text.secondary"
                    >
                        Outside of work, I’m always experimenting with new ideas, building side projects, and learning
                        new tools and technologies.
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap", mx: "auto" }}>
                    <Button
                        startIcon={<FileOpenOutlinedIcon/>}
                        sx={btnSx}
                        variant="contained"
                        href="/Resume-Wilson-Costa.pdf"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume
                    </Button>
                    <Button
                        startIcon={<GitHubIcon />}
                        variant="outlined"
                        href={Info.github}
                        target="_blank"
                        rel="noreferrer"
                        sx={btnSx}
                    >
                        GitHub
                    </Button>
                    <Button sx={btnSx} startIcon={<EmailIcon />} variant="outlined" href={`mailto:${Info.email}`}>
                        Email
                    </Button>
                    <Button sx={btnSx} startIcon={<LinkedInIcon />} variant="outlined" href={Info.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                    </Button>
                </Box>
                <Box sx={{ mt: 4, maxWidth: 980, mx: "auto" }}>
                    <Box sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                        gap: 2,
                    }}>
                        <SkillsSection title="Programming Languages" items={SkillCategories.Languages} />
                        <SkillsSection title="Frameworks" items={SkillCategories.Frameworks} direction="right" />
                        <SkillsSection title="Infrastructure" items={SkillCategories.Infrastructure} />
                        <SkillsSection title="Databases" items={SkillCategories.Databases} direction="right" />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

function useTypewriter(
    words: string[],
    {
        typeMs = 70,
        eraseMs = 45,
        holdMs = 900,
    }: { typeMs?: number; eraseMs?: number; holdMs?: number } = {}
) {
    const [wordIndex, setWordIndex] = React.useState(0);
    const [out, setOut] = React.useState("");
    const [phase, setPhase] = React.useState<"typing" | "holding" | "erasing">("typing");

    const word = words[wordIndex] ?? "";

    React.useEffect(() => {
        let t: number;

        if (phase === "typing") {
            if (out.length < word.length) {
                t = window.setTimeout(() => setOut(word.slice(0, out.length + 1)), typeMs);
            } else {
                t = window.setTimeout(() => setPhase("holding"), holdMs);
            }
        }

        if (phase === "holding") {
            t = window.setTimeout(() => setPhase("erasing"), holdMs);
        }

        if (phase === "erasing") {
            if (out.length > 0) {
                t = window.setTimeout(() => setOut(out.slice(0, -1)), eraseMs);
            } else {
                setWordIndex((i) => (i + 1) % words.length);
                setPhase("typing");
            }
        }

        return () => window.clearTimeout(t);
    }, [out, phase, word, words.length, typeMs, eraseMs, holdMs]);

    return out;
}