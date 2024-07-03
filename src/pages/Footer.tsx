import { Typography, Box } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '10vh',
        width: '100%',
        backgroundColor: '#28282B',
        color: '#FAF9F6',
        marginTop: '10rem',
      }}
    >
      <Typography sx={{ alignContent: 'center' }}>
        Created with ❤️ by dka
      </Typography>
    </Box>
  )
}
