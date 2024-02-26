import { Box, Link, Typography } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import Avatar from "../components/avatar/Avatar";
import Skills from "../components/skills/Skills";

function Hero() {
  const TypographyStyle = {
    color: "#555",
    fontWeight: "500",
    lineHeight: "2rem",
    fontSize: "1.2rem",
  };

  const IconsStyle = {
    color: "#555",
    fontSize: "2rem",
  };

  return (
    <Box
      sx={{
        paddingLeft: "14.8%",
        paddingRight: "14.8%",
        marginBottom: "160px",
      }}
      className="home"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "60px",
              fontWeight: "700",
            }}
          >
            Full-Stack Developer
          </Typography>
          <Box sx={{ paddingLeft: "0.3rem", paddingTop: "1rem" }}>
            <Typography sx={TypographyStyle}>
              Hi! I'm Diogo and I've +2y of full stack development.
              <br />I started my path in Brazil, but now I'm based in
              Vancouver/BC.
            </Typography>
            <Box
              sx={{
                display: "flex",
                paddingLeft: "1.2rem",
                paddingTop: "1.8rem",
                gap: "1rem",
              }}
            >
              <Link
                href={"https://www.linkedin.com/in/diogoka"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn
                  sx={{
                    ...IconsStyle,
                    "&:hover": {
                      color: "#004F98",
                    },
                  }}
                />
              </Link>
              <Link
                href={"https://github.com/diogoka"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub
                  sx={{
                    ...IconsStyle,
                    "&:hover": {
                      color: "#2d2e32",
                    },
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Avatar />
      </Box>
      <Skills />
    </Box>
  );
}

export default Hero;
