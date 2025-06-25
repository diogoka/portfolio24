import { Box, Typography, Stack } from '@mui/material';
import Project from '../components/projects/Project';
import {
  EventllegeProject,
  RestaurantProject,
  FridgeFyProject,
  CashOutAppProject,
  TreesRedesignProject,
} from '../components/projects/ProjectList';

import UiUxProjectCard from '../components/projects/UiUxProjectCard';

export default function Projects() {
  const TitleStyle = {
    color: '#2d2e32',
    fontSize: '2rem',
    fontWeight: '700',
    // marginBottom: '1.5rem',
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        marginBottom: { xs: '2rem', lg: '4rem' },
      }}
      className='projects'
    >
      <Typography sx={TitleStyle}>Projects</Typography>

      {/* Full-Stack Section */}
      <Box>
        <Typography sx={{ ...TitleStyle, fontSize: '1.5rem' }}>
          Full-Stack Development
        </Typography>
        <Stack gap={7}>
          <Project project={EventllegeProject} noDemo />
          <Project project={CashOutAppProject} />
          <Project project={RestaurantProject} />
          <Project project={FridgeFyProject} />
        </Stack>
      </Box>

      {/* UI/UX Section */}
      <Box>
        <Typography sx={{ ...TitleStyle, fontSize: '1.5rem' }}>
          UI/UX Study Cases
        </Typography>
        <Stack gap={7}>
          <UiUxProjectCard
            project={TreesRedesignProject['trees-redesign']}
            href='/project/trees-redesign'
            designLink='https://www.figma.com/design/4NITyjB5a2rGdkDN3Aq0QL/Trees-Coffee-Redesign?node-id=183-2353&t=lCzh7wnDdOkkNnFo-1'
          />
        </Stack>
      </Box>
    </Box>
  );
}
