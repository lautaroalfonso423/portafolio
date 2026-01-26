import { Box, Stack, Typography } from "@mui/material";
import { MyProjects } from "../resources/data.ts";
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: 800, letterSpacing: -0.3 }} gutterBottom>
        Personal Projects
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        A few things I’ve built.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        useFlexGap
        flexWrap="wrap"
        alignItems="stretch"
        justifyContent="center"
      >
        {MyProjects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </Stack>
    </Box>
  );
}
