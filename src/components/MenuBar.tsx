import {AppBar, Avatar, Button, Toolbar, Typography} from "@mui/material";
import {Info} from "../resources/data.ts";

export default function MenuBar() {
    const btnSx = {
        textTransform: "none",
        fontWeight: 600,
        position: "relative",
        "&::after": {
            content: '""',
            position: "absolute",
            left: 5,
            right: 5,
            bottom: 6,
            height: 2,
            borderRadius: 2,
            backgroundColor: "currentColor",
            transform: "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 400ms ease",
            opacity: 0.6,
        },
        "&:hover::after": { transform: "scaleX(1)" },
    }
    return (
        <AppBar
            position="sticky"
            color="transparent"
            elevation={0}
            sx={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(10,14,28,0.55)",
                borderBottom: "1px solid rgba(255,255,255,0.10)",
            }}
        >
            <Toolbar>
                <Avatar sx={{mr: 1.5}} alt={Info.name} src="/my-photo.jpeg" />
                <Typography variant="h6" sx={{ flexGrow: 1 }}>My Portfolio</Typography>
                <Button color="inherit" href="#aboutme" sx={btnSx}>About me</Button>
                <Button color="inherit" href="#experience" sx={btnSx}>Experience</Button>
                <Button color="inherit" href="#projects" sx={btnSx}>My Projects</Button>
                <Button color="inherit" href="#certifications" sx={btnSx}>Certifications</Button>
                <Button color="inherit" href="#contact" sx={btnSx}>Contact</Button>
            </Toolbar>
        </AppBar>
    );
}