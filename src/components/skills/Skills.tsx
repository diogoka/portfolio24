import { Box, Typography } from '@mui/material'

export default function Skills() {
  const SkillContainerStyle = {
    display: 'flex',
    maxWidth: '80vw',
    rowGap: { xs: '12px', sm: '20px' },
    columnGap: { xs: '8px', sm: '15px' },
    '& img': {
      width: '50px',
      height: '50px',
    },
    flexWrap: 'wrap',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: { xs: 'space-evenly', sm: 'flex-start' },
        paddingTop: {
          xs: '3rem',
          sm: '80px',
        },
        gap: '20px',
      }}
    >
      <Typography
        sx={{
          fontSize: '1.2rem',
          fontWeight: '600',
          minWidth: '110px',
          display: { xs: 'none', sm: 'block' },
        }}
      >
        Tech Stack |
      </Typography>

      <Box sx={SkillContainerStyle}>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: '600',
            minWidth: '110px',
            display: { xs: 'block', sm: 'none' },
          }}
        >
          Tech Stack |
        </Typography>

        <>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
        </>
      </Box>
    </Box>
  )
}
