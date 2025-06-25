import { Box, Typography, Grid } from '@mui/material';
import { Section } from '../../types/types';

type Props = {
  section: Section;
};

function ConclusionSection({ section }: Props) {
  return (
    <>
      {section.improvements &&
        section.improvements.map((improvement, impIndex) => (
          <Box key={impIndex} sx={{ mb: 6 }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#F58220',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              {improvement.title}
            </Typography>

            <Typography
              variant='body1'
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#555',
                mb: 4,
              }}
            >
              {improvement.description}
            </Typography>

            {/* Comparação Antes/Depois */}
            <Grid container spacing={4}>
              {/* Antes */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant='h6'
                  sx={{ mb: 2, color: '#d32f2f', fontWeight: 600 }}
                >
                  Before
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '800px',
                    aspectRatio: '4 / 3',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #d32f2f',
                    overflow: 'hidden',
                    mx: 'auto',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      cursor: improvement.beforeImgSrc ? 'pointer' : 'default',
                      transform: improvement.beforeImgSrc
                        ? 'translateY(-2px)'
                        : 'none',
                      boxShadow: improvement.beforeImgSrc
                        ? 'rgba(211, 47, 47, 0.2) 0px 10px 36px 0px'
                        : 'none',
                    },
                    height: 'auto',
                  }}
                >
                  {improvement.beforeImgSrc ? (
                    <img
                      src={improvement.beforeImgSrc}
                      alt={`Antes - ${improvement.title}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  ) : (
                    <Typography variant='body2' color='text.secondary'>
                      Image not available
                    </Typography>
                  )}
                </Box>
              </Grid>

              {/* Depois */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant='h6'
                  sx={{ mb: 2, color: '#2e7d32', fontWeight: 600 }}
                >
                  After
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: '800px',
                    aspectRatio: '4 / 3',
                    backgroundColor: '#ECEBEA',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #2e7d32',
                    overflow: 'hidden',
                    mx: 'auto',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      cursor: improvement.afterImgSrc ? 'pointer' : 'default',
                      transform: improvement.afterImgSrc
                        ? 'translateY(-2px)'
                        : 'none',
                      boxShadow: improvement.afterImgSrc
                        ? 'rgba(46, 125, 50, 0.2) 0px 10px 36px 0px'
                        : 'none',
                    },
                    height: 'auto',
                  }}
                >
                  {improvement.afterImgSrc ? (
                    <img
                      src={improvement.afterImgSrc}
                      alt={`Depois - ${improvement.title}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        backgroundColor: '#ECEBEA',
                      }}
                    />
                  ) : (
                    <Typography variant='body2' color='text.secondary'>
                      Image not available
                    </Typography>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
    </>
  );
}

export default ConclusionSection;
