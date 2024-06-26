import { Box, Typography } from '@mui/material'

const About = () => {
  const TypographyStyle = {
    color: '#2d2e32',
    fontSize: '2rem',
    fontWeight: '700',
  }
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '14.8%',
        paddingRight: '14.8%',
        gap: '16px',
      }}
      className="about"
    >
      <Typography sx={TypographyStyle}>About me</Typography>
      <Box sx={{ display: 'flex', width: '100%' }}>
        <Typography sx={{ width: '50%', textAlign: 'justify' }}>
          From a young age, I have been passionate about technology; Even during
          my career as lawyer, I continuously integrated technical solutions to
          streamline my work. One notable instance was developing an MS Excel
          formula to efficiently manage data for my tasks.
          <br />
          Now, after growing up as a lawyer, it was time to go deep in the tech
          field and embrace what I truly love, so this is the reason why I
          started software engineering. Now, I'm in Canada, improving my skills
          to become a better full-stack developer and to share my enthusiasm and
          passion for software development.
        </Typography>

        <Typography sx={{ width: '50%' }}>Image</Typography>
      </Box>
    </Box>
  )
}

export default About
