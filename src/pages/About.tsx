import { Box, Typography } from '@mui/material'
import CodingImage from '../public/images/coding.jpg'
import useMediaQuery from '@mui/material/useMediaQuery'

const About = () => {
  const TypographyStyle = {
    color: '#2d2e32',
    fontSize: '2rem',
    fontWeight: '700',
  }
  const isMobile = useMediaQuery('(max-width:1100px)')
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: isMobile ? '20px' : '0',
        marginBottom: isMobile ? '35px' : '50px',
      }}
      className="about"
    >
      <Typography sx={TypographyStyle}>About me</Typography>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: {
            xs: 'column',
            lg: 'row',
          },
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? '30px' : '0',
        }}
      >
        <Typography
          sx={{
            width: {
              xs: '100%',
              lg: '50%',
            },
            textAlign: 'justify',
          }}
        >
          From a young age, I have been passionate about technology; Even during
          my career as lawyer, I continuously integrated technical solutions to
          streamline my work. One notable instance was developing an MS Excel
          formula to efficiently manage data for my tasks.
          <br />
          <br />
          Now, after growing up as a lawyer, it was time to go deep in the tech
          field and embrace what I truly love, so this is the reason why I
          started software engineering. Now, I'm in Canada, improving my skills
          to become a better full-stack developer and to share my enthusiasm and
          passion for software development.
        </Typography>

        <Box
          sx={{
            width: { xs: '100%', lg: '50%' },
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {isMobile ? (
            <img
              src={CodingImage}
              style={{ width: '100%', borderRadius: '10px' }}
              alt="coding"
            />
          ) : (
            <img
              src={CodingImage}
              style={{ width: '70%', borderRadius: '10px' }}
              alt="coding"
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

export default About
