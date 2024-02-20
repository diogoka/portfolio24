import { Box, Link, Typography, keyframes } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import avatar from "../public/images/avatar.jpg";
import Skills from "./skills/Skills";

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

  const bubble = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border: "3px solid yellow";
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 70%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
        paddingLeft: "16rem",
        paddingRight: "16rem",
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
        <Box
          sx={{
            width: "266px",
            height: "346px",
            minHeight: "346px",
            minWidth: "266px",
            border: "2px solid #F58220",
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            animation: `${bubble} 10s ease-in-out infinite`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <img
            src={avatar}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          />
        </Box>
      </Box>

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
        <Skills />
      </Box>
    </Box>
  );
}

export default Hero;
