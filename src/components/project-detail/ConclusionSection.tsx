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
              <Grid item xs={12} md={6}>
                <Typography
                  variant='h6'
                  sx={{ mb: 2, color: '#d32f2f', fontWeight: 600 }}
                >
                  Antes
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #d32f2f',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'translateY(-2px)',
                      boxShadow: 'rgba(211, 47, 47, 0.2) 0px 10px 36px 0px',
                    },
                  }}
                >
                  <Typography variant='body2' color='text.secondary'>
                    [Antes - {improvement.title}]
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant='h6'
                  sx={{ mb: 2, color: '#2e7d32', fontWeight: 600 }}
                >
                  Depois
                </Typography>
                <Box
                  sx={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #2e7d32',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'translateY(-2px)',
                      boxShadow: 'rgba(46, 125, 50, 0.2) 0px 10px 36px 0px',
                    },
                  }}
                >
                  <Typography variant='body2' color='text.secondary'>
                    [Depois - {improvement.title}]
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
    </>
  );
}

export default ConclusionSection;
