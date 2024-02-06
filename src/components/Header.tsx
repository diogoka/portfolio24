import { Box, Typography } from "@mui/material";
import FileDownload from "@mui/icons-material/FileDownload";
import { Link as ScrollLink } from "react-scroll";

function Header() {
  const TypographyStyle = {
    color: "#2d2e32",
    fontSize: "1.1rem",
    fontWeight: "700",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        backgroundColor: "#fff",
        boxShadow: "1px 0.5px 10px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box
        component={ScrollLink}
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="menu-hover"
        sx={{
          textDecoration: "none",
          color: "#2d2e32",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          paddingLeft: "4.5rem",
        }}
      >
        <Typography sx={{ fontSize: "2.34rem", fontWeight: "bold" }}>
          dk
        </Typography>
        <Typography
          sx={{ fontSize: "2.34rem", fontWeight: "bold", color: "#004F98" }}
        >
          a
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "40%",
          paddingRight: "4.5rem",
        }}
      >
        <Box
          component={ScrollLink}
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-110}
          className="menu-hover"
          sx={TypographyStyle}
        >
          Projects
        </Box>
        <Box
          component={ScrollLink}
          to="gallery"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="menu-hover"
          sx={TypographyStyle}
        >
          Gallery
        </Box>
        <Box
          component={ScrollLink}
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="menu-hover"
          sx={TypographyStyle}
        >
          About me
        </Box>
        <Box
          component={ScrollLink}
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="menu-hover"
          sx={TypographyStyle}
        >
          Contact
        </Box>
        <Box
          component={ScrollLink}
          to="resume"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="menu-hover"
          sx={TypographyStyle}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Resume
            <FileDownload></FileDownload>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
