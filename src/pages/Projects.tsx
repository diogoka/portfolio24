import { Box, Typography, Stack } from '@mui/material';
import Project from '../components/projects/Project';
import {
  EventllegeProject,
  RestaurantProject,
  FridgeFyProject,
  CashOutAppProject,
} from '../components/projects/ProjectList';

export default function Projects() {
  const TypographyStyle = {
    color: '#2d2e32',
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: { xs: '25px', md: '0' },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: { xs: '2rem', lg: '8rem' },
      }}
      className='projects'
    >
      <Typography sx={TypographyStyle}>Projects</Typography>

      <Stack gap={7}>
        <Project project={EventllegeProject} />
        <Project project={CashOutAppProject} />
        <Project project={RestaurantProject} />
        <Project project={FridgeFyProject} />
      </Stack>
    </Box>
  );
}
