import { Box, Typography } from '@mui/material';

type Props = {
  issueNumber: string;
  title: string;
  description: string;
  position?: 'card1' | 'card2';
  variant?: 'desktop' | 'mobile' | 'mobileInverted';
};

function IssueCard({
  issueNumber,
  title,
  description,
  position = 'card1',
  variant = 'desktop',
}: Props) {
  const isDesktop = variant === 'desktop';
  const isMobileInverted = variant === 'mobileInverted';

  return (
    <Box
      sx={{
        gridArea: position,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: isDesktop ? 'center' : 'flex-start',
        alignItems: 'center',
        position: 'relative',
        transform: {
          xs: 'none',
          md:
            position === 'card1'
              ? 'translateX(60px) translateY(-80px)'
              : 'translateX(-60px) translateY(-140px)',
          lg:
            position === 'card1'
              ? 'translateX(20px) translateY(-90px)'
              : 'translateX(-20px) translateY(-160px)',
          xl:
            position === 'card1'
              ? 'translateX(100px) translateY(-100px)'
              : isMobileInverted
              ? 'translateX(-100px) translateY(60px)'
              : 'translateX(-100px) translateY(-100px)',
        },
      }}
    >
      {/* Badge de Issue */}
      <Box
        sx={{
          backgroundColor: '#d32f2f',
          color: 'white',
          px: 2,
          py: 0.5,
          borderRadius: '16px',
          fontSize: '0.8rem',
          fontWeight: 500,
          mb: 2,
          boxShadow: '0 2px 8px rgba(211, 47, 47, 0.3)',
        }}
      >
        Issue #{issueNumber}
      </Box>

      {/* Card de descrição */}
      <Box
        sx={{
          p: isDesktop ? 2.5 : 3,
          backgroundColor: '#ffebee',
          borderRadius: '12px',
          border: '1px solid #ffcdd2',
          width: '100%',
          maxWidth: isDesktop ? '200px' : '300px',
          textAlign: 'center',
        }}
      >
        <Typography
          variant={isDesktop ? 'subtitle2' : 'subtitle1'}
          sx={{
            fontWeight: 600,
            color: '#d32f2f',
            mb: 1,
            fontSize: isDesktop ? '0.9rem' : '1.1rem',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            fontSize: isDesktop ? '0.8rem' : '0.9rem',
            lineHeight: 1.4,
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default IssueCard;
