import { Box, Typography } from "@mui/material";
import type { TechLogo } from "../resources/types.ts";
import React from "react";

export default function SkillsSection({title, items}: {
    title: string;
    items: TechLogo[];
    direction?: "left" | "right";
}) {

    const viewportRef = React.useRef<HTMLDivElement | null>(null);
    const rowRef = React.useRef<HTMLDivElement | null>(null);
    const [shouldAnimate, setShouldAnimate] = React.useState(false);

    const measure = React.useCallback(() => {
        const viewport = viewportRef.current;
        const row = rowRef.current;
        if (!viewport || !row) return;

        // If content is wider than the visible area -> animate
        const overflow = row.scrollWidth > viewport.clientWidth + 1;
        setShouldAnimate(overflow);
    }, []);

    React.useEffect(() => {
        measure();

        // Re-measure on resize (and when fonts/images load)
        const onResize = () => measure();
        window.addEventListener("resize", onResize);

        // Observe element size changes (more reliable than only window resize)
        const ro = new ResizeObserver(() => measure());
        if (viewportRef.current) ro.observe(viewportRef.current);
        if (rowRef.current) ro.observe(rowRef.current);

        return () => {
            window.removeEventListener("resize", onResize);
            ro.disconnect();
        };
    }, [measure, items]);

    // Duplicate only if we animate (for seamless loop)
    const renderItems = shouldAnimate ? [...items, ...items] : items;

    return (
        <Box
            sx={{
                borderRadius: 3,
                border: "1px solid rgba(255,255,255,0.12)",
                backgroundColor: "rgba(255,255,255,0.04)",
                overflow: "hidden",
                px: 2,
                py: 1.5,
            }}
        >
            <Typography sx={{ fontWeight: 800, mb: 1 }}>{title}</Typography>

            <Box
                ref={viewportRef}
                sx={{
                    overflow: "hidden",
                    // edge fade looks nice, even when static
                    maskImage:
                        "linear-gradient(90deg, transparent, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent)",
                    WebkitMaskImage:
                        "linear-gradient(90deg, transparent, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, transparent)",
                }}
            >
                <Box
                    ref={rowRef}
                    sx={{
                        display: "flex",
                        width: shouldAnimate ? "max-content" : "100%",
                        gap: 3,
                        alignItems: "center",
                        justifyContent: shouldAnimate ? "flex-start" : "space-evenly",
                        py: 0.75,

                        // animate only when needed
                        animation: shouldAnimate ? `marquee 30s linear infinite` : "none",
                        willChange: shouldAnimate ? "transform" : "auto",

                        "&:hover": shouldAnimate ? { animationPlayState: "paused" } : undefined,

                        "@keyframes marquee": {
                            from: { transform: "translateX(0)" },
                            to: { transform: "translateX(-50%)" }, // works because of duplication
                        },

                        "@media (prefers-reduced-motion: reduce)": {
                            animation: "none",
                        },
                    }}
                >
                    {renderItems.map((logo, idx) => (
                        <Box
                            key={`${logo.name}-${idx}`}
                            sx={{
                                minWidth: 92,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 0.6,
                                opacity: 0.9,
                                transition: "transform 140ms ease, opacity 140ms ease",
                                "&:hover": { transform: "translateY(-2px)", opacity: 1 },
                            }}
                        >
                            <Box
                                component="img"
                                src={logo.src}
                                alt={logo.name}
                                loading="lazy"
                                onLoad={measure} // important: images affect width
                                sx={{ height: 28, width: "auto", objectFit: "contain" }}
                            />
                            <Typography
                                variant="caption"
                                sx={{
                                    color: "text.secondary",
                                    fontSize: 12,
                                    lineHeight: 1,
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {logo.name}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
