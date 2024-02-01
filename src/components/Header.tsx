import { Box, Link, Typography } from "@mui/material";
import FileDownload from "@mui/icons-material/FileDownload";

function Header() {
  const LinkStyle = {
    textDecoration: "none",
    color: "#2d2e32;",
    "&:hover": {
      color: "#004F98",
    },
  };

  const TypographyStyle = {
    fontSize: "1.1rem",
    fontWeight: "700",
  };

  return (
    <Box
      sx={{
        height: "10vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "4.5rem",
        paddingRight: "4.5rem",
        backgroundColor: "#e8e8e8",
        boxShadow: "1px 0.5px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box>
        <Link
          sx={{
            ...LinkStyle,
            "&:hover": {
              color: "#2d2e32;",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
          href={"#home"}
        >
          <Typography sx={{ fontSize: "2.34rem", fontWeight: "bold" }}>
            dk
          </Typography>
          <Typography
            sx={{ fontSize: "2.34rem", fontWeight: "bold", color: "#004F98" }}
          >
            a
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
        }}
      >
        <Link sx={LinkStyle} href="#work">
          <Typography sx={TypographyStyle}>Work</Typography>
        </Link>
        <Link sx={LinkStyle} href="#gallery">
          <Typography sx={TypographyStyle}>Gallery</Typography>
        </Link>
        <Link sx={LinkStyle} href="#about">
          <Typography sx={TypographyStyle}>About me</Typography>
        </Link>
        <Link sx={LinkStyle} href="#contact">
          <Typography sx={TypographyStyle}>Contact</Typography>
        </Link>
        <Link sx={LinkStyle} href="#resume">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={TypographyStyle}>Resume</Typography>
            <FileDownload sx={TypographyStyle}></FileDownload>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default Header;
