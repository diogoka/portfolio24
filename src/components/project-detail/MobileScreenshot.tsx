import { Box, Typography } from '@mui/material';

type Props = {
  issueNumber: number;
  title: string;
  description: string;
  placeholder?: string;
};

function MobileScreenshot({
  issueNumber,
  title,
  description,
  placeholder,
}: Props) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Badge de Issue */}
      <Box
        sx={{
          position: 'absolute',
          top: -8,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#d32f2f',
          color: 'white',
          px: 2,
          py: 0.5,
          borderRadius: '16px',
          fontSize: '0.8rem',
          fontWeight: 500,
          zIndex: 1,
          boxShadow: '0 2px 8px rgba(211, 47, 47, 0.3)',
        }}
      >
        Issue #{issueNumber}
      </Box>

      {/* Screenshot Mobile */}
      <Box
        sx={{
          width: '240px',
          height: '480px',
          backgroundColor: '#f8f8f8',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '8px solid #2d2e32',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60px',
            height: '6px',
            backgroundColor: '#666',
            borderRadius: '3px',
          },
        }}
      >
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ textAlign: 'center', px: 2 }}
        >
          [Mobile Screenshot]
          <br />
          {placeholder}
        </Typography>
      </Box>

      {/* Descrição embaixo */}
      <Box
        sx={{
          mt: 3,
          p: 3,
          backgroundColor: '#ffebee',
          borderRadius: '12px',
          border: '1px solid #ffcdd2',
          width: '100%',
          maxWidth: '300px',
        }}
      >
        <Typography
          variant='subtitle1'
          sx={{
            fontWeight: 600,
            color: '#d32f2f',
            mb: 1,
            textAlign: 'center',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{ textAlign: 'center' }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default MobileScreenshot;
