import { Box, Typography, Stack } from '@mui/material'
import Project from '../components/projects/Project'
import {
  EventllegeProject,
  RestaurantProject,
  FridgeFyProject,
} from '../components/projects/ProjectList'

export default function Projects() {
  const TypographyStyle = {
    color: '#2d2e32',
    fontSize: '2rem',
    fontWeight: '700',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: '14.8%',
        paddingRight: '14.8%',
        gap: '16px',
      }}
      className="projects"
    >
      <Typography sx={TypographyStyle}>Projects</Typography>

      <Stack gap={7}>
        <Project project={EventllegeProject} />
        <Project project={RestaurantProject} />
        <Project project={FridgeFyProject} />
      </Stack>
    </Box>
  )
}
