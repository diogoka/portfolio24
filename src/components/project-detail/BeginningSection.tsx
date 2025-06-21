import { Box, Typography, Grid } from '@mui/material';
import MobileScreenshot from './MobileScreenshot';

function BeginningSection({ section }) {
  return (
    <>
      {section.subsections &&
        section.subsections.map((sub, subIndex) => (
          <Box key={subIndex} sx={{ mb: 6 }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 600,
                mb: 3,
                color: '#F58220',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              {sub.subtitle}
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
              {sub.content}
            </Typography>

            {/* Grid otimizado para screenshots mobile */}
            <Grid container spacing={6} justifyContent='center'>
              <Grid item xs={12} sm={8} md={5}>
                <MobileScreenshot
                  issueNumber='1'
                  title='Inconsistent Typography'
                  description='Different font sizes and weights across similar elements causing visual hierarchy confusion.'
                  placeholder='Typography Issues'
                />
              </Grid>

              <Grid item xs={12} sm={8} md={5}>
                <MobileScreenshot
                  issueNumber='2'
                  title='Poor Color Contrast'
                  description='Low contrast ratios making text difficult to read, especially for users with visual impairments.'
                  placeholder='Color Contrast Issues'
                />
              </Grid>
            </Grid>
          </Box>
        ))}
    </>
  );
}

export default BeginningSection;
