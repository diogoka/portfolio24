import { Box, Typography } from '@mui/material';
import { Section } from '../../types/types';

type Props = {
  section: Section;
};

function ProcessSection({ section }: Props) {
  return (
    <>
      {section.subsections &&
        section.subsections.map((sub, subIndex) => (
          <Box key={subIndex} sx={{ mb: 6 }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 600,
                mb: 4,
                color: '#F58220',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              {sub.subtitle}
            </Typography>

            {/* UX Research Methods */}
            {sub.methods &&
              sub.methods.map((method, methodIndex) => (
                <Box
                  key={methodIndex}
                  sx={{
                    mb: 4,
                    pl: 2,
                    borderLeft: '3px solid #F58220',
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#2d2e32',
                    }}
                  >
                    {method.name}
                  </Typography>

                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#666',
                      mb: 3,
                    }}
                  >
                    {method.description}
                  </Typography>

                  <Box
                    sx={{
                      width: '100%',
                      height: '250px',
                      backgroundColor: '#f8f8f8',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #e0e0e0',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        cursor: 'pointer',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <Typography variant='body2' color='text.secondary'>
                      [Imagem - {method.name}]
                    </Typography>
                  </Box>
                </Box>
              ))}

            {/* Wireframe/Mockup */}
            {sub.content && !sub.methods && (
              <>
                <Typography
                  variant='body1'
                  sx={{
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                    color: '#555',
                    mb: 4,
                  }}
                >
                  {sub.content}
                </Typography>

                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Typography variant='body2' color='text.secondary'>
                    [Imagem - {sub.subtitle}]
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        ))}
    </>
  );
}

export default ProcessSection;
