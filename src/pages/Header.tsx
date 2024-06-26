import { Box, Typography, Container } from '@mui/material'
import Links from '../components/header/Links'
import { Link as ScrollLink } from 'react-scroll'

function Header() {
  const ContainerStyle = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: '#fff',
    boxShadow: '1px 0.5px 10px rgba(0, 0, 0, 0.25)',
    minWidth: '100%',
    width: '100%',
    zIndex: 90,
    marginBottom: '136px',
  }

  return (
    <Container sx={ContainerStyle}>
      <Box
        component={ScrollLink}
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="menu-hover"
        sx={{
          textDecoration: 'none',
          color: '#2d2e32',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: '4.5rem',
        }}
      >
        <Typography sx={{ fontSize: '2.34rem', fontWeight: 'bold' }}>
          dk
        </Typography>
        <Typography
          sx={{ fontSize: '2.34rem', fontWeight: 'bold', color: '#F58220' }}
        >
          a
        </Typography>
      </Box>
      <Links />
    </Container>
  )
}

export default Header
