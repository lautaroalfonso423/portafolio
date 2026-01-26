import {Box, Typography} from "@mui/material";
import {Info} from "../resources/data.ts";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                mt: 8,
                py: 4,
                borderTop: "1px solid rgba(255,255,255,0.12)",
                textAlign: "center",
            }}
        >
            <Typography variant="body2" color="text.secondary" sx={{ opacity: 0.85 }}>
                © {new Date().getFullYear()} {Info.name}. All rights reserved. <p/>
                Built with <Box component="span" sx={{ fontWeight: 600 }}>React</Box> +{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>Vite</Box> +{" "}
                <Box component="span" sx={{ fontWeight: 600 }}>MUI</Box>{" "}
            </Typography>
        </Box>
    );
}