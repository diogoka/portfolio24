import { Box } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

export default function Links() {
  const TypographyStyle = {
    color: "#2d2e32",
    fontSize: "1.1rem",
    fontWeight: "700",
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "40%",
        minWidth: "460px",
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
        </Box>
      </Box>
    </Box>
  );
}
