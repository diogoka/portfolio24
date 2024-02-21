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
  };

  const ProjectDescriptionContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: "1",
    margin: "16px",
    maxWidth: "50%",
    minWidth: "432px",
    minHeight: "278px",
    gap: "7px",
  };

  const ProjectNameStyle = {
    fontSize: "1.8rem",
    fontWeight: "500",
    fontStyle: "italic",
  };

  const ProjectImageStyle = {
    minWidth: "394px",
    minHeight: "267.19px",
    maxWidth: "394px",
    maxHeight: "267.19px",
    margin: "1rem",
    backgroundImage: `url(${project.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const ProjectDescriptionStyle = {
    textAlign: "justify",
    textJustify: "inter-word",
  };

  return (
    <Box sx={ProjectContainerStyle}>
      <Paper elevation={3} sx={ProjectImageStyle} />
      <Box sx={ProjectDescriptionContainerStyle}>
        <Typography sx={ProjectNameStyle}>{project.name}</Typography>
        <Typography sx={ProjectDescriptionStyle}>
          {project.description}
        </Typography>

        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography> Tech Stack:</Typography>
          </Box>
          <Box>
            <Typography>Frontend: NextJS, TypeScript, Material UI </Typography>
            <Typography>
              Backend: NodeJS, TypeScript, Firebase, PostgreSQL
            </Typography>
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
          <Box sx={{ width: "55px" }}>
            {/* need to use the property coming from props. */}
            <Link href={"https://github.com/"} target="_blank">
              <img src={GitHubImage} style={{ width: "100%" }} />
            </Link>
          </Box>
          <Box sx={{ width: "55px" }}>
            {/* need to use the property coming from props. */}
            <Link href={"https://github.com/"} target="_blank">
              <img src={DemoImage} style={{ width: "100%" }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
