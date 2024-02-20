import { Box, Typography } from "@mui/material";

export default function Skills() {
  const SkillContainerStyle = {
    display: "flex",
    maxWidth: "80vw",
    gap: "20px",
    "& img": {
      width: "50px",
      height: "50px",
    },
  };

  const SkillBoxStyle = {
    display: "flex",
    gap: "2px",
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        paddingTop: "80px",
        gap: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: "600",
          minWidth: "110px",
        }}
      >
        Tech Stack |
      </Typography>

      <Box sx={SkillContainerStyle}>
        <Box sx={SkillBoxStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
        </Box>
        <Box sx={SkillBoxStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
        </Box>
        <Box sx={SkillBoxStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
        </Box>
        <Box sx={SkillBoxStyle}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
        </Box>
        <Box>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </Box>
      </Box>
    </Box>
  );
}
