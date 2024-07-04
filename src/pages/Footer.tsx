import { Typography, Box, Link } from '@mui/material'
import { LinkedIn, GitHub } from '@mui/icons-material'

export default function Footer() {
  const IconsStyle = {
    color: '#FAF9F6',
    fontSize: '2rem',
    '&:hover': {
      opacity: 0.8,
    },
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        backgroundColor: '#28282B',
        color: '#FAF9F6',
        marginTop: '5rem',
        padding: '1rem 0rem 1rem 0rem',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Box
          sx={{
            width: '50%',
            paddingLeft: { xs: '0rem', sm: '4rem' },
            display: 'flex',
            columnGap: '5px',
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Link
            href={'https://www.linkedin.com/in/diogoka'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn sx={IconsStyle} />
          </Link>
          <Link
            href={'https://github.com/diogoka'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub sx={IconsStyle} />
          </Link>
        </Box>
        <Typography
          sx={{
            width: '50%',
            textAlign: { xs: 'center', sm: 'end' },
            paddingRight: { xs: '0rem', sm: '4rem' },
            fontSize: '0.9rem',
            marginTop: '3px',
          }}
        >
          Created with ❤️ by dka
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          fontSize: '0.76rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3px',
        }}
      >
        Copyright © 2024 all rights reserved
      </Box>
    </Box>
  )
}
