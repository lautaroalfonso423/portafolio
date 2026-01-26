import { Box, Container } from "@mui/material";
import ContactForm from "./components/ContactForm.tsx";
import MenuBar from "./components/MenuBar.tsx";
import Hero from "./components/Hero.tsx";
import Certifications from "./components/Certifications.tsx";
import Projects from "./components/Projects.tsx";
import Footer from "./components/Footer.tsx";
import WorkExperience from "./components/WorkExperience.tsx";

export default function App() {
    return (
        <Box>
            <MenuBar/>

            <Container id="aboutme" maxWidth="lg" sx={{ py: 6, px: 6 }}><Hero/></Container>

            <Container id="experience" maxWidth="lg" sx={{ py: 6, px: 6 }}><WorkExperience/></Container>

            <Container id="projects" maxWidth="lg" sx={{ py: 6, px: 6 }}><Projects/></Container>

            <Container id="certifications" maxWidth="lg" sx={{ py: 6, px: 6 }}><Certifications/></Container>

            <Container id="contact" maxWidth="lg" sx={{ py: 6, px: 6 }}><ContactForm/></Container>

            <Footer/>
        </Box>
    );
}
