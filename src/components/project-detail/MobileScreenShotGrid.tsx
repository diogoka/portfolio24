import { Box, Typography } from '@mui/material';

type Props = {
  imageSrc?: string;
  alt?: string;
  placeholder?: string;
  gridArea: string;
  issueNumber: string;
};

function MobileScreenshotGrid({
  imageSrc,
  alt,
  placeholder = 'Mobile Screenshot',
  gridArea,
  issueNumber,
}: Props) {
  return (
    <Box
      sx={{
        gridArea: gridArea,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Badge de Issue - posicionado acima da imagem */}

      {/* Screenshot Mobile */}
      <Box
        sx={{
          width: '200px',
          height: '400px',
          backgroundColor: '#f8f8f8',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '8px solid #2d2e32',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          // Posicionamento para encostar as imagens
          marginLeft: gridArea === 'image1' ? 'auto' : 0,
          marginRight: gridArea === 'image2' ? 'auto' : 0,
          transform:
            gridArea === 'image1'
              ? 'translateX(10px)'
              : gridArea === 'image2'
              ? 'translateX(-10px)'
              : 'none',
          '&:hover': {
            cursor: 'pointer',
            transform:
              gridArea === 'image1'
                ? 'translateX(10px) translateY(-4px) scale(1.02)'
                : gridArea === 'image2'
                ? 'translateX(-10px) translateY(-4px) scale(1.02)'
                : 'translateY(-4px) scale(1.02)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
            zIndex: 10,
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '15px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '5px',
            backgroundColor: '#666',
            borderRadius: '3px',
          },
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px',
            }}
          />
        ) : (
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ textAlign: 'center', px: 2 }}
          >
            [{placeholder}]
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default MobileScreenshotGrid;
