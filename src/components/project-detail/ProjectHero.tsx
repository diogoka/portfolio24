import { Box, Typography } from '@mui/material';

type Props = {
  project: {
    title: string;
    subtitle: string;
    heroImage: string;
  };
};

function ProjectHero({ project }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '50vh', md: '60vh' },
        backgroundImage: `url(${project.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 4,
        paddingTop: 8,
        color: 'white',
        backgroundColor: '#2d2e32',
        borderRadius: '10px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      <Box>
        <Typography
          variant='h1'
          component='h1'
          sx={{
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '4.5rem', lg: '4.5rem' },
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {project.title}
        </Typography>
        <Typography
          variant='h5'
          sx={{
            mt: 2,
            fontWeight: 400,
            fontSize: { xs: '1.2rem', md: '1rem', lg: '1.5rem' },
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            // whiteSpace: 'pre-line',
          }}
        >
          {project.subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProjectHero;
