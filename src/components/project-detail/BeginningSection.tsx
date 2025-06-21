import { Box, Typography } from '@mui/material';
import GridLayout from './GridLayout';
import MobileScreenshotGrid from './MobileScreenShotGrid';
import IssueCard from './IssueCard';
import MobileScreenshot from './MobileScreenshot';

import { Section } from '../../types/types';
type Props = {
  section: Section;
};

function BeginningSection({ section }: Props) {
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
              <GridLayout layout='mobileAsymmetric'>
                <IssueCard
                  issueNumber='1'
                  title='Navigation Issues'
                  description='Confusing navigation patterns making it hard for users to find content.'
                  position='card1'
                  variant='mobile'
                />

                <MobileScreenshotGrid
                  imageSrc={sub.image1Src}
                  alt='Mobile interface issue 1'
                  placeholder='Mobile Screenshot 1'
                  gridArea='image1'
                  issueNumber='1'
                />

                <MobileScreenshotGrid
                  imageSrc={sub.image2Src}
                  alt='Mobile interface issue 2'
                  placeholder='Mobile Screenshot 2'
                  gridArea='image2'
                  issueNumber='2'
                />

                <IssueCard
                  issueNumber='2'
                  title='Touch Target Size'
                  description='Buttons and interactive elements too small for comfortable mobile interaction.'
                  position='card2'
                  variant='mobile'
                />
              </GridLayout>
            ) : (
              // Layout mobile lado a lado (padrão)
              <GridLayout layout='mobileSideBySide'>
                <MobileScreenshot
                  issueNumber='1'
                  title='Inconsistent Typography'
                  description='Different font sizes and weights across similar elements causing visual hierarchy confusion.'
                  placeholder='Typography Issues'
                />

                <MobileScreenshot
                  issueNumber='2'
                  title='Poor Color Contrast'
                  description='Low contrast ratios making text difficult to read, especially for users with visual impairments.'
                  placeholder='Color Contrast Issues'
                />
              </GridLayout>
            )}
          </Box>
        ))}
    </>
  );
}

export default BeginningSection;
