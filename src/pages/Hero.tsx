import { Box, Link, Typography } from '@mui/material';
import { LinkedIn, GitHub } from '@mui/icons-material';
import Avatar from '../components/avatar/Avatar';
import Skills from '../components/skills/Skills';

function Hero() {
  const TypographyStyle = {
    color: '#555',
    fontWeight: '500',
    lineHeight: '2rem',
    fontSize: '1.2rem',
  };

  const IconsStyle = {
    color: '#555',
    fontSize: '2rem',
  };

  return (
    <Box
      sx={{
        paddingTop: { xs: '2rem', sm: '10rem' },
        height: '100%',
        marginBottom: { xs: '5rem', lg: '15.2rem' },
      }}
      className='home'
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: {
            md: 'space-between',
          },
          gap: '22px',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: {
                xs: '47px',
                sm: '60px',
              },

              fontWeight: '700',
            }}
          >
            Hi! I'm Diogo.
          </Typography>
          <Box sx={{ paddingLeft: '0.3rem', paddingTop: '1rem' }}>
            <Typography sx={TypographyStyle}>
              I'm a <strong>full-stack developer</strong> based in Vancouver/BC,
              currently expanding my skills in <strong>UI/UX Design</strong>.{' '}
              <br />I love building applications that are not only functional,
              but also enjoyable to use.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                paddingLeft: '1.2rem',
                paddingTop: '1.8rem',
                gap: '1rem',
              }}
            >
              <Link
                href={'https://www.linkedin.com/in/diogoka'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <LinkedIn
                  sx={{
                    ...IconsStyle,
                    '&:hover': {
                      color: '#004F98',
                    },
                  }}
                />
              </Link>
              <Link
                href={'https://github.com/diogoka'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHub
                  sx={{
                    ...IconsStyle,
                    '&:hover': {
                      color: '#2d2e32',
                    },
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        <Avatar />
      </Box>
      <Skills />
    </Box>
  );
}

export default Hero;
