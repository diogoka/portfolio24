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
        width: {
          xs: '227px',
          sm: '266px',
        },
        height: {
          xs: '290px',
          sm: '346px',
        },
        minHeight: {
          xs: '0',
          sm: '346px',
        },
        minWidth: {
          xs: '0',
          sm: '266px',
        },

        border: '2px solid #F58220',
        borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
        animation: `${bubble} 10s ease-in-out infinite`,
        position: 'relative',
        overflow: 'hidden',
        margin: {
          xs: '0 auto',
          sm: '0',
        },
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
