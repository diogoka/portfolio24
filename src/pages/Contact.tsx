import { Box, Link, Typography } from '@mui/material'
import MailOutlineIcon from '@mui/icons-material/MailOutline'

const TypographyStyle = {
  color: '#2d2e32',
  fontSize: '2rem',
  fontWeight: '700',
}

const TextStyle = {
  fontSize: { xs: '1rem', sm: '1.4rem' },
  minWidth: '354.94px',
}

const Contact = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      className="contact"
    >
      <Box>
        <Typography sx={TypographyStyle}>Contact</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          minWidth: '100%',
          gap: '22px',
          alignItems: { xs: 'flex-start', lg: 'center' },
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Typography sx={TextStyle}>
          Don't be shy, leave me a message:
        </Typography>
        <Link
          href="mailto:diogokalmeida@gmail.com"
          target="_blank"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: { xs: '1rem', sm: '1.4rem' },
            minWidth: '332px',
            textDecoration: 'none',
            color: '#2d2e32',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transition: 'all 0.3s ease-in-out',
              transform: 'translateY(-0.3px)',
              opacity: '0.8',
              color: '#F58220',
            },
            '&:active': {
              transform: 'translateY(-0.3px)',
            },
            '&:hover .mail-icon': {
              transition: 'all 0.3s ease-in-out',
              filter:
                'invert(68%) sepia(83%) saturate(414%) hue-rotate(352deg) brightness(101%) contrast(103%)',
            },
          }}
        >
          <MailOutlineIcon sx={{ fontSize: '2rem' }} />
          diogokalmeida@gmail.com
        </Link>
      </Box>
    </Box>
  )
}

export default Contact
