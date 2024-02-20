import { Box, Paper, Typography } from "@mui/material";
import { ProjectType } from "../../types/types";

type Props = {
  project: ProjectType;
};

export default function Project(project: Props) {
  const ProjectDescriptionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexGrow: "1",
    margin: "16px",
    maxWidth: "50%",
  };

  const ProjectNameStyle = {
    fontSize: "1.8rem",
    fontWeight: "500",
    fontStyle: "italic",
  };

  const ProjectImageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "394px",
    minHeight: "267.19px",
    margin: "1rem",
    backgroundImage: `url(${project.project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Paper elevation={3} sx={ProjectImageStyle} />
      <Box sx={ProjectDescriptionStyle}>
        <Typography sx={ProjectNameStyle}>{project.project.name}</Typography>
        <Typography>
          A platform created to manage college events in which enables event
          organizers to create and manage their events, generating reports on
          students who have attended. The students also can track the attended
          events and make reviews to help the others students.
        </Typography>
        <Box>
          <Typography>Tech Stack:</Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography>Github</Typography>
            <Typography>Demo</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
