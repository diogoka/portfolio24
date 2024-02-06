import { Box, Link, Typography, keyframes, useTheme } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import avatar from "../public/images/avatar.jpg";

function Hero() {
  const theme = useTheme();
  const TypographyStyle = {
    color: "#555",
    fontWeight: "500",
    lineHeight: "2rem",
    fontSize: "1.2rem",
    [theme.breakpoints.down("xl")]: {
      fontSize: "1rem",
    },
  };

  const IconsStyle = {
    color: "#555",
    fontSize: "2rem",
  };

  const IconBox = {
    display: "flex",
    columnGap: "0.2rem",
    marginRight: "2rem",
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
        marginLeft: "16rem",
        marginRight: "16rem",
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
              fontSize: "4.2rem",
              fontWeight: "700",
              [theme.breakpoints.down("xl")]: {
                fontSize: "2.7rem",
              },
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
                columnGap: "1rem",
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
            width: "21.875rem",
            height: "21.875rem",
            [theme.breakpoints.down("xl")]: {
              width: "15rem",
              height: "15rem",
            },
            border: "2px solid #004F98",
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            animation: `${bubble} 10s ease-in-out infinite`,
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        ></Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginTop: "5.5rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "600",
            [theme.breakpoints.down("xl")]: {
              fontSize: "1rem",
            },
          }}
        >
          Tech Stack |
        </Typography>

        <Box
          sx={{
            display: "flex",
            maxWidth: "80vw",
            "& img": {
              width: "50px",
              height: "50px",
              [theme.breakpoints.down("xl")]: {
                width: "35px",
                height: "35px",
              },
            },
          }}
        >
          <Box sx={{ ...IconBox, marginLeft: "2rem" }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          </Box>
          <Box sx={IconBox}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          </Box>
          <Box sx={IconBox}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          </Box>
          <Box sx={IconBox}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
          </Box>
          <Box sx={{ ...IconBox, marginRight: 0 }}>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
