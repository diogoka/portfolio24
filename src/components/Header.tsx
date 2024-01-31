import { Box, Link, Typography } from "@mui/material";

function Header() {
  return (
    <Box
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 0,
      }}
    >
      <Box sx={{ width: "30%" }}>
        <Typography sx={{ fontSize: "2rem" }}>dka</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <Link underline="none">
          <Typography>Projects</Typography>
        </Link>
        <Typography>Gallery</Typography>
        <Typography>About me</Typography>
        <Typography>Contact</Typography>
      </Box>
    </Box>
  );
}

export default Header;
