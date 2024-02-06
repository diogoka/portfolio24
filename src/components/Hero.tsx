import { Box, Link, Typography, keyframes } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import avatar from "../public/images/avatar.jpg";

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

  const IconBox = {
    display: "flex",
    columnGap: "0.2rem",
    marginRight: "2rem",
  };

  const bubble = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background: linear-gradient(to right, yellow, purple, red, green, blue, black);
  }

  10% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 70%;
    background: linear-gradient(to right, purple, red, green, blue, black, yellow);
  }

  30% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background: linear-gradient(to right, red, green, blue, black, yellow, purple);
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 70%;
    background: linear-gradient(to right, green, blue, black, yellow, purple, red);
  }

  70% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background: linear-gradient(to right, blue, black, yellow, purple, red, green);
  }

  90% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 70%;
    background: linear-gradient(to right, yellow, purple, red, green, blue, black);
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    background: linear-gradient(to right, purple, red, green, blue, black, yellow);
  }
`;

  return (
    <Box
      sx={{
        height: "90vh",
        width: "100vw",
        marginTop: "12.5rem",

        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginLeft: "18rem",
          marginRight: "18rem",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          <Typography sx={{ fontSize: "4.2rem", fontWeight: "700" }}>
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
                paddingTop: "1rem",
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
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "21.875rem",
            height: "21.875rem",
            border: "2px solid transparent", // Change this line
            background:
              "linear-gradient(to right, yellow, purple, red, green, blue)", // Change this line
            borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
            animation: `${bubble} 15s ease-in-out infinite`,

            overflow: "hidden",
          }}
        >
          <img
            src={avatar}
            alt="diogoAvatar"
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              paddingTop: "1.3rem",
              border: "3px solid white",
              borderRadius: "inherit",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", marginTop: "8rem", width: "100%" }}>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "600" }}>
          Tech Stack |
        </Typography>

        <Box
          sx={{
            display: "flex",
            "& img": { width: "50px", height: "50px" },
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
