import { Box, keyframes } from '@mui/material'
import avatar from '../../public/images/avatar.jpg'

export default function Avatar() {
  const bubble = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border: "3px solid yellow";
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 70%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  `
  return (
    <Box
      sx={{
        width: '266px',
        height: '346px',
        minHeight: '346px',
        minWidth: '266px',
        border: '2px solid #F58220',
        borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
        animation: `${bubble} 10s ease-in-out infinite`,
        backgroundPosition: 'top',
        backgroundSize: 'cover',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <img
        src={avatar}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      />
    </Box>
  )
}
