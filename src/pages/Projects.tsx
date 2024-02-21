import { Box, Typography, Stack } from "@mui/material";
import Project from "../components/projects/Project";
import { EventllegeProject } from "../components/projects/ProjectList";

export default function Projects() {
  const TypographyStyle = {
    color: "#2d2e32",
    fontSize: "2rem",
    fontWeight: "700",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        paddingLeft: "14.8%",
        paddingRight: "14.8%",
        gap: "16px",
      }}
      className="projects"
    >
      <Typography sx={TypographyStyle}>Projects</Typography>

      <Stack>
        <Project project={EventllegeProject} />
      </Stack>
    </Box>
  );
}
