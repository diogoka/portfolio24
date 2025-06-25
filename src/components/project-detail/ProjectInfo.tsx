import { Box, Typography, Grid } from '@mui/material';
import { UiUxProjectType } from '../../types/types';

type Props = {
  project: UiUxProjectType;
};

function ProjectInfo({ project }: Props) {
  return (
    <Box
      sx={{
        mt: 1,
        width: '100%',
        backgroundColor: 'transparent',
        py: 5,
        borderBottom: '1px solid #e9ecef',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              borderLeft: '3px solid #F58220',
              pl: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              height: '120px',
            }}
          >
            <Typography
              variant='h6'
              sx={{ fontWeight: 600, color: '#2d2e32', mb: 1 }}
            >
              Role
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {project.projectInfo.role}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              borderLeft: '3px solid #F58220',
              pl: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              height: '120px',
            }}
          >
            <Typography
              variant='h6'
              sx={{ fontWeight: 600, color: '#2d2e32', mb: 1 }}
            >
              Team
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {project.projectInfo.team.join(' • ')}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              borderLeft: '3px solid #F58220',
              pl: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              height: '120px',
            }}
          >
            <Typography
              variant='h6'
              sx={{ fontWeight: 600, color: '#2d2e32', mb: 1 }}
            >
              Time
            </Typography>
            <Typography variant='body1' color='text.secondary'>
              {project.projectInfo.time}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              borderLeft: '3px solid #F58220',
              pl: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              width: '100%',
              height: '120px',
              overflow: 'hidden',
            }}
          >
            <Typography
              variant='h6'
              sx={{ fontWeight: 600, color: '#2d2e32', mb: 1 }}
            >
              UX Research
            </Typography>
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{
                lineHeight: 1.4,
                fontSize: '0.95rem',
              }}
            >
              {project.projectInfo.research.join(' • ')}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectInfo;
