import type {Project} from "../data/projects.ts";
import { Card, CardActions, CardContent, Button, Chip, Stack, Typography, CardMedia } from "@mui/material";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <Card
            variant="outlined"
            sx={{ width: "30rem", height: "100%", display: "flex", flexDirection: "column" }}
        >
            {project.screenshots ? (
                <CardMedia
                    component="img"
                    height="160"
                    image={project.screenshots[0]}
                    alt={`${project.title} screenshot`}
                />
            ) : null}
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                    {project.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                </Typography>

                <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                    {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                    ))}
                </Stack>
            </CardContent>

            <CardActions>
                {project.projectUrls.map((url) => (
                    <Button size="small" href={url} target="_blank" rel="noreferrer">{url.split('/').filter(Boolean).pop()}</Button>
                ))}
                {project.demoUrl ? (
                    <Button size="small" href={project.demoUrl} target="_blank" rel="noreferrer">
                        Live
                    </Button>
                ) : null}
            </CardActions>
        </Card>
    )
}