import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import GridLayout from './GridLayout';
import MobileScreenshotGrid from './MobileScreenShotGrid';
import IssueCard from './IssueCard';

import { Section } from '../../types/types';
type Props = {
  section: Section;
};

function BeginningSection({ section }: Props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  let issueCounter = 1;

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

            {/* Layout condicional baseado no tipo de screenshot */}
            {sub.screenshotType === 'mobileAsymmetric' ? (
              // Layout mobile assimétrico com duas imagens
              <GridLayout
                layout={isMobile ? 'mobileAsymmetric' : 'mobileAsymmetric'}
              >
                <IssueCard
                  issueNumber={`${issueCounter++}`}
                  title={sub.issue1Title!}
                  description={sub.issue1Description!}
                  position='card1'
                  variant={isMobile ? 'mobile' : 'mobile'}
                />

                <MobileScreenshotGrid
                  imageSrc={sub.image1Src}
                  alt='Mobile interface issue 1'
                  placeholder='Mobile Screenshot 1'
                  gridArea='image1'
                  issueNumber='1'
                  imgOnTop={true}
                />

                <MobileScreenshotGrid
                  imageSrc={sub.image2Src}
                  alt='Mobile interface issue 2'
                  placeholder='Mobile Screenshot 2'
                  gridArea='image2'
                  issueNumber={`${subIndex + 2}`}
                />

                <IssueCard
                  issueNumber={`${issueCounter++}`}
                  title={sub.issue2Title!}
                  description={sub.issue2Description!}
                  position='card2'
                  variant={isMobile ? 'mobile' : 'mobile'}
                />
              </GridLayout>
            ) : (
              // Layout mobile invertido (mas simétrico no mobile)
              <GridLayout
                layout={
                  isMobile ? 'mobileAsymmetric' : 'mobileAsymmetricInverted'
                }
              >
                <IssueCard
                  issueNumber={`${issueCounter++}`}
                  title={sub.issue1Title!}
                  description={sub.issue1Description!}
                  position='card1'
                  variant={isMobile ? 'mobile' : 'mobileInverted'}
                />

                <MobileScreenshotGrid
                  imageSrc={sub.image1Src}
                  alt='Mobile interface issue 1'
                  placeholder='Mobile Screenshot 1'
                  gridArea='image1'
                  issueNumber='1'
                  type={isMobile ? undefined : 'mobileInverted'}
                />

                <MobileScreenshotGrid
                  imageSrc={sub.image2Src}
                  alt='Mobile interface issue 2'
                  placeholder='Mobile Screenshot 2'
                  gridArea='image2'
                  issueNumber='2'
                  type={isMobile ? undefined : 'mobileInverted'}
                />

                <IssueCard
                  issueNumber={`${issueCounter++}`}
                  title={sub.issue2Title!}
                  description={sub.issue2Description!}
                  position='card2'
                  variant={isMobile ? 'mobile' : 'mobileInverted'}
                />
              </GridLayout>
            )}
          </Box>
        ))}
    </>
  );
}

export default BeginningSection;
