import { Typography, Box } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '80px',
        width: '100%',
        backgroundColor: '#28282B',
        color: '#FAF9F6',
        marginTop: '5rem',
      }}
    >
      <Typography sx={{ margin: 'auto auto' }}>
        Created with ❤️ by dka
      </Typography>
    </Box>
  )
}
