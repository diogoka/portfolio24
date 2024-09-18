import { Box, Fade, keyframes, Skeleton } from '@mui/material';
import avatar from '../../public/images/avatar.jpg';
import { useState } from 'react';

export default function Avatar() {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
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
  `;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

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
      {!imageLoaded && (
        <Skeleton
          variant='rectangular'
          width='100%'
          height='100%'
          animation='wave'
        />
      )}
      <Fade in={imageLoaded} timeout={1500} easing={'ease-in'}>
        <img
          src={avatar}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          }}
          onLoad={handleImageLoad}
        />
      </Fade>
    </Box>
  );
}
