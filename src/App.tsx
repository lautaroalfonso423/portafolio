import { AppBar,Avatar, Box, Button, Container, Stack, Toolbar, Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FEATURED_PROJECTS } from "./data/projects.ts";
import ProjectCard from "./components/ProjectCard.tsx";

export default function App() {
    return (
        <Box>
            <AppBar position="sticky" color="info" elevation={0}>
                <Toolbar>
                    <Avatar alt="Wilson" src="/public/vite.svg" />
                    <Typography variant="h6" sx={{px: 1, flexGrow: 1 }}>Wilson Costa</Typography>
                    <Button color="inherit" href="#projects">Projects</Button>
                    <Button color="inherit" href="#contact">Contact</Button>
                </Toolbar>
            </AppBar>

            <Container sx={{ py: 6 }}>
                <Box sx={{ py: 6 }}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Wilson Costa
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                        Software Engineer • Lisbon, Portugal 🇵🇹
                    </Typography>

                    <Typography sx={{ maxWidth: 720, mt: 2 }} color="text.secondary">
                        I build full-stack apps and APIs — from fast backends to modern UIs.
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2, mt: 3, flexWrap: "wrap" }}>
                        <Button
                            startIcon={<GitHubIcon />}
                            variant="contained"
                            href="https://github.com/WilsonRCosta"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </Button>

                        <Button startIcon={<EmailIcon />} variant="outlined" href="mailto:wilson.ruben97@gmail.com">
                            Email
                        </Button>
                        <Button  startIcon={<LinkedInIcon />} variant="outlined" href="https://www.linkedin.com/in/wilson-costa-9a6b96159/" target="_blank" rel="http://localhost:5173/">
                            LinkedIn
                        </Button>
                    </Box>
                </Box>


                <Box id="projects" sx={{ py: 6 }}>
                    <Typography variant="h4" gutterBottom>Projects</Typography>
                    <Stack
                        direction="row"
                        spacing={8}
                        useFlexGap
                        flexWrap="wrap"
                    >
                        {FEATURED_PROJECTS.map((p) => (
                            <ProjectCard key={p.title} project={p} />
                        ))}
                    </Stack>
                </Box>

                <Box id="contact" sx={{ py: 6 }}>
                    <Typography variant="h4" gutterBottom>
                        Contacts
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        wilson.ruben97@gmail.com
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        github.com/WilsonRCosta
                    </Typography>
                </Box>

                <Box sx={{ py: 4 }}>
                    <Typography variant="body2" color="text.secondary">
                        Built with React + Vite + MUI
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
