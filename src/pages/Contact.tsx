import { Box, Link, Typography } from '@mui/material'
import MailIcon from '../assets/icons/mail.png'

const TypographyStyle = {
  color: '#2d2e32',
  fontSize: '2rem',
  fontWeight: '700',
}

const TextStyle = {
  fontSize: '1.4rem',
  minWidth: '354.94px',
}

const Contact = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '14.8%',
        paddingRight: '14.8%',
        gap: '16px',
        paddingTop: '10rem',
      }}
      className="about"
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
          alignItems: 'center',
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
            fontSize: '1.4rem',
            minWidth: '332px',
            textDecoration: 'none',
            color: '#2d2e32',
            transition: 'all 0.1s ease-in-out',
            '&:hover': {
              transform: 'translateY(-0.3px)',
              opacity: '0.8',
              color: '#002147',
            },
            '&:active': {
              transform: 'translateY(-0.3px)',
            },
          }}
        >
          <img src={MailIcon} style={{ minWidth: '52px', width: '6.5%' }} />
          diogokalmeida@gmail.com
        </Link>
      </Box>
    </Box>
  )
}

export default Contact
