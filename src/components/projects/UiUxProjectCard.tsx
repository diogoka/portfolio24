import { Box, Typography, Button, Fade } from '@mui/material';
import { UiUxProjectType } from '../../types/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import BrushIcon from '@mui/icons-material/Brush';
import MenuBookIcon from '@mui/icons-material/MenuBook';

type Props = {
  project: UiUxProjectType;
  href?: string; // para o estudo de caso
  designLink?: string; // link para o design no Figma, Behance etc.
};

export default function UiUxProjectCard({ project, href, designLink }: Props) {
  const isMobile = useMediaQuery('(max-width:1100px)');
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => setImageLoaded(true);

  const containerStyle = {
    minHeight: '330px',
    display: 'flex',
    flexDirection: {
      xs: 'column',
      lg: 'row',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: isMobile ? '5px' : '0',
  };

  const textContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    maxWidth: isMobile ? '100%' : '50%',
    gap: '7px',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
  };

  const descriptionStyle = {
    textAlign: 'justify',
    textJustify: 'inter-word',
    marginBottom: isMobile ? '8px' : '21px',
  };

  const buttonStyle = {
    minWidth: '131px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d2e32',
    padding: '9.5px 18px',
    transition: 'all 0.1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-0.3px)',
      opacity: '0.8',
      backgroundColor: '#2d2e32a1',
    },
    '&:active': {
      transform: 'translateY(-0.3px)',
      backgroundColor: '#2d2e32a1',
    },
  };

  return (
    <Box sx={containerStyle}>
      {isMobile && <Typography sx={titleStyle}>{project.title}</Typography>}

      <Box
        sx={{
          maxWidth: isMobile ? null : '500px',
          minWidth: isMobile ? null : '500px',
          borderRadius: '10px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-0.3px)',
            opacity: 0.99,
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          },
        }}
        onClick={() => {
          if (href) window.open(href, '_blank');
        }}
      >
        <Fade in={imageLoaded} timeout={1500} easing='ease-in'>
          <img
            src={project.cover}
            onLoad={handleImageLoad}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </Fade>
      </Box>

      <Box sx={textContainerStyle}>
        {!isMobile && <Typography sx={titleStyle}>{project.title}</Typography>}
        <Typography sx={descriptionStyle}>{project.description}</Typography>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '1rem',
          }}
        >
          {designLink && (
            <Button
              variant='contained'
              sx={buttonStyle}
              href={designLink}
              target='_blank'
              endIcon={<BrushIcon />}
            >
              Design
            </Button>
          )}
          {href && (
            <Button
              variant='contained'
              sx={buttonStyle}
              href={href}
              endIcon={<MenuBookIcon />}
            >
              Study Case
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
