import { Box, Typography } from '@mui/material'

const TypographyStyle = {
  color: '#2d2e32',
  fontSize: '2rem',
  fontWeight: '700',
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
      <Typography sx={TypographyStyle}>Contact</Typography>
    </Box>
  )
}

export default Contact
