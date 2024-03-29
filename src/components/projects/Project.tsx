import { Box, Paper, Typography, Link } from "@mui/material";
import { ProjectType } from "../../types/types";
import GitHubImage from "../../public/images/githubIconblue.png";
import DemoImage from "../../public/images/demonstrationIcon.png";

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  const ProjectContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const ProjectDescriptionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    margin: "16px",
    maxWidth: "50%",
    gap: "7px",
  };

  const ProjectNameStyle = {
    fontSize: "1.8rem",
    fontWeight: "500",
    fontStyle: "italic",
    textAlign: "center",
  };

  const ProjectImageStyle = {
    minWidth: "394px",
    minHeight: "267.19px",
    maxWidth: "394px",
    maxHeight: "267.19px",
    margin: "1rem",
    // backgroundImage: `url(${project.image})`,
    // backgroundSize: "cover",
    // backgroundPosition: "center",
    display: "flex",
  };

  const ProjectDescriptionStyle = {
    textAlign: "justify",
    textJustify: "inter-word",
    marginBottom: "3px",
  };

  const ButtonsProjectStyle = {
    width: "55px",
    "&:hover": {
      transform: "translateY(-0.3px)",
      opacity: "0.8",
    },
    "&:active": {
      transform: "translateY(-0.3px)",
    },
  };

  return (
    <Box sx={ProjectContainerStyle}>
      <Paper elevation={3} sx={ProjectImageStyle}>
        <img
          src={project.image}
          alt="project-image"
          style={{ width: "100%", height: "100%" }}
        />
      </Paper>
      <Box sx={ProjectDescriptionContainerStyle}>
        <Typography sx={ProjectNameStyle}>{project.name}</Typography>
        <Typography sx={ProjectDescriptionStyle}>
          {project.description}
        </Typography>

        <Box sx={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
          <Box>
            <Typography sx={{ fontWeight: "700", minWidth: "89px" }}>
              {" "}
              Tech Stack:
            </Typography>
          </Box>
          <Box display={"flex"}>
            <Typography>{project.techStack}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            gap: "60px",
          }}
        >
          <Box sx={ButtonsProjectStyle}>
            <Link href={project.gitHub} target="_blank">
              <img src={GitHubImage} style={{ width: "100%" }} />
            </Link>
          </Box>
          <Box sx={ButtonsProjectStyle}>
            <Link href={project.demo} target="_blank">
              <img src={DemoImage} style={{ width: "100%" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
