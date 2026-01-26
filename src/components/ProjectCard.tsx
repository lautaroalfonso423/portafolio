import type { Project } from "../resources/types.ts";
import React from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Stack,
    Typography,
    CardMedia,
} from "@mui/material";

export default function ProjectCard({ project }: { project: Project }) {
    const rootRef = React.useRef<HTMLDivElement | null>(null);

    const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const el = rootRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        const max = 15;
        const rotX = (0.5 - py) * (max * 2);
        const rotY = (px - 0.5) * (max * 2);

        const gx = (px * 100).toFixed(1);
        const gy = (py * 100).toFixed(1);

        const dx = px - 0.5;
        const dy = py - 0.5;
        const dist = Math.min(1, Math.sqrt(dx * dx + dy * dy) * 2);
        const glare = (0.35 * (1 - dist) + 0.08).toFixed(3);

        el.style.setProperty("--rx", `${rotX.toFixed(2)}deg`);
        el.style.setProperty("--ry", `${rotY.toFixed(2)}deg`);
        el.style.setProperty("--s", `1.02`);
        el.style.setProperty("--gx", `${gx}%`);
        el.style.setProperty("--gy", `${gy}%`);
        el.style.setProperty("--glare", `${glare}`);
    };

    const reset = () => {
        const el = rootRef.current;
        if (!el) return;
        el.style.setProperty("--rx", `0deg`);
        el.style.setProperty("--ry", `0deg`);
        el.style.setProperty("--s", `1`);
        el.style.setProperty("--gx", `50%`);
        el.style.setProperty("--gy", `50%`);
        el.style.setProperty("--glare", `0`);
    };

    return (
        <Box sx={{ width: { xs: "100%", sm: "30rem" }, perspective: "1200px" }}>
            <Box
                ref={rootRef}
                onPointerMove={handleMove}
                onPointerLeave={reset}
                onPointerDown={handleMove}
                sx={{
                    "--rx": "0deg",
                    "--ry": "0deg",
                    "--s": "1",
                    "--gx": "50%",
                    "--gy": "50%",
                    "--glare": "0",
                    position: "relative",
                    transformStyle: "preserve-3d",
                    transform: "rotateX(var(--rx)) rotateY(var(--ry)) scale(var(--s))",
                    transition: "transform 140ms ease-out",
                    willChange: "transform",
                    borderRadius: 4,
                }}
            >
                {/* GLARE */}
                <Box
                    aria-hidden
                    sx={{
                        pointerEvents: "none",
                        position: "absolute",
                        inset: 0,
                        borderRadius: 4,
                        overflow: "hidden",
                        zIndex: 2,
                        backgroundImage: `
              radial-gradient(
                circle at var(--gx) var(--gy),
                rgba(255,255,255, calc(var(--glare) * 1)),
                rgba(255,255,255, 0) 55%
              )
            `,
                        mixBlendMode: "screen",
                    }}
                />

                {/* EDGE SHEEN */}
                <Box
                    aria-hidden
                    sx={{
                        pointerEvents: "none",
                        position: "absolute",
                        inset: 0,
                        borderRadius: 4,
                        zIndex: 1,
                        border: "1px solid rgba(255,255,255,0.10)",
                        boxShadow: "0 18px 50px rgba(0,0,0,0.45)",
                        transition: "border-color 200ms ease",
                    }}
                />

                <Card
                    variant="outlined"
                    sx={{
                        position: "relative",
                        zIndex: 0,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: 4,
                        overflow: "hidden",
                        borderColor: "rgba(255,255,255,0.10)",
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                        backdropFilter: "blur(10px)",
                        transition: "border-color 200ms ease, box-shadow 200ms ease",
                        "&:hover": {
                            borderColor: "rgba(144,202,249,0.28)",
                            boxShadow: "0 22px 60px rgba(0,0,0,0.55)",
                        },
                    }}
                >
                    {project.screenshots?.[0] ? (
                        <Box sx={{ position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="170"
                                image={project.screenshots[0]}
                                alt={`${project.title} screenshot`}
                                sx={{ objectFit: "cover", objectPosition: "top", width: "100%" }}
                            />
                            {/* subtle image fade to blend into card */}
                            <Box
                                aria-hidden
                                sx={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(180deg, rgba(0,0,0,0.0) 55%, rgba(0,0,0,0.35) 100%)",
                                }}
                            />
                        </Box>
                    ) : null}

                    <CardContent sx={{ flexGrow: 1, pt: 2.2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 900, letterSpacing: -0.2 }}>
                            {project.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.1, lineHeight: 1.7 }}>
                            {project.description}
                        </Typography>

                        {/* Cleaner tags (replace Chips) */}
                        <Box sx={{ mt: 2 }}>
                            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                                {project.tags.map((tag: string) => (
                                    <Box
                                        key={tag}
                                        sx={{
                                            px: 1.2,
                                            py: 0.55,
                                            borderRadius: 999,
                                            fontSize: 12,
                                            color: "text.secondary",
                                            border: "1px solid rgba(255,255,255,0.12)",
                                            backgroundColor: "rgba(255,255,255,0.04)",
                                            transition: "transform 140ms ease, background-color 140ms ease",
                                            "&:hover": {
                                                transform: "translateY(-1px)",
                                                backgroundColor: "rgba(255,255,255,0.06)",
                                            },
                                        }}
                                    >
                                        {tag}
                                    </Box>
                                ))}
                            </Stack>
                        </Box>
                    </CardContent>

                    <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                            {project.projectUrls.map((url: string) => (
                                <Button
                                    key={url}
                                    size="small"
                                    variant="outlined"
                                    href={url}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        borderRadius: 999,
                                        textTransform: "none",
                                        fontWeight: 700,
                                        borderColor: "rgba(255,255,255,0.16)",
                                        backgroundColor: "rgba(255,255,255,0.03)",
                                        "&:hover": { backgroundColor: "rgba(255,255,255,0.06)" },
                                    }}
                                >
                                    {url.split("/").filter(Boolean).pop()}
                                </Button>
                            ))}

                            {project.demoUrl ? (
                                <Button
                                    size="small"
                                    variant="contained"
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        borderRadius: 999,
                                        textTransform: "none",
                                        fontWeight: 800,
                                    }}
                                >
                                    Live
                                </Button>
                            ) : null}
                        </Stack>
                    </CardActions>
                </Card>
            </Box>
        </Box>
    );
}
