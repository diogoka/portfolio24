import { Box, Paper, Typography, Stack } from "@mui/material";
import Eventllege from "../public/images/eventllege.png";

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
        marginLeft: "16rem",
        marginRight: "16rem",
        marginTop: "5rem",
      }}
      className="projects"
    >
      <Typography sx={TypographyStyle}>Projects</Typography>

      <Stack>
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "30rem",
            height: "20rem",
            margin: "1rem",
          }}
        >
          <img
            src={Eventllege}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Paper>
        <Box>
          <Typography>Eventllege</Typography>
          <Typography>Project Description</Typography>
        </Box>
      </Stack>
    </Box>
  );
}
