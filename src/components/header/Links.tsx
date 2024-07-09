import { Box } from '@mui/material'
import { Link as ScrollLink } from 'react-scroll'

export default function Links() {
  const TypographyStyle = {
    transition: 'all 0.3s ease-in-out',
    color: '#2d2e32',
    fontSize: '1.1rem',
    fontWeight: '700',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '34%',
        minWidth: '460px',
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
      {/* <Box
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
      </Box> */}
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
      <Box className="menu-hover" sx={TypographyStyle}>
        <a
          href="https://firebasestorage.googleapis.com/v0/b/eventllege.appspot.com/o/resume%2FresumeDiogo.pdf?alt=media&token=8afd4e4c-4ee4-433f-a3bc-d99b92e49674"
          download="resumeDiogo.pdf"
          target="_blank"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Resume
          </Box>
        </a>
      </Box>
    </Box>
  )
}
