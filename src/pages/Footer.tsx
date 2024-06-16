import { Typography, Box } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '10vh',
      }}
    >
      <Typography sx={{ alignContent: 'center' }}>
        Created with ❤️ by dka
      </Typography>
    </Box>
  )
}
