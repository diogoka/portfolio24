import { Box, Typography, Button, Fade } from '@mui/material';
import { ProjectType } from '../../types/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import ComputerIcon from '@mui/icons-material/Computer';
import { useState } from 'react';

type Props = {
  project: ProjectType;
};

export default function Project({ project }: Props) {
  const isMobile = useMediaQuery('(max-width:1100px)');

  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const ProjectContainerStyle = {
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

  const ProjectDescriptionContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    maxWidth: isMobile ? '100%' : '50%',
    gap: '7px',
  };

  const ProjectNameStyle = {
    fontSize: '1.8rem',
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
  };

  const ProjectDescriptionStyle = {
    textAlign: 'justify',
    textJustify: 'inter-word',
    marginBottom: isMobile ? '8px' : '21px',
  };

  const ButtonsProjectStyle = {
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
    <Box sx={ProjectContainerStyle}>
      {isMobile && (
        <Typography sx={ProjectNameStyle}>{project.name}</Typography>
      )}
      <Box
        sx={{
          maxWidth: isMobile ? null : '500px',
          minWidth: isMobile ? null : '500px',
          borderRadius: '10px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            cursor: 'pointer',
            transform: 'translateY(-0.3px)',
            opacity: '0.99',
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
          },
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => {
          window.open(project.demo, '_blank');
        }}
      >
        <Fade in={imageLoaded} timeout={1500} easing={'ease-in'}>
          <img
            src={project.image}
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            onLoad={handleImageLoad}
          />
        </Fade>
      </Box>
      <Box sx={ProjectDescriptionContainerStyle}>
        {!isMobile && (
          <Typography sx={ProjectNameStyle}>{project.name}</Typography>
        )}
        <Typography sx={ProjectDescriptionStyle}>
          {project.description}
        </Typography>

        {project.olderSite && (
          <Typography sx={{ width: 'fit-content' }}>
            The older site can be found at{' '}
            <a href={project.olderSite} target='_blank'>
              {project.olderSite}
            </a>
          </Typography>
        )}

        <Box sx={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
          <Box>
            <Typography sx={{ fontWeight: '700', minWidth: '89px' }}>
              {' '}
              Tech Stack:
            </Typography>
          </Box>
          <Box display={'flex'}>
            <Typography>{project.techStack}</Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            gap: '30px',
          }}
        >
          <Button
            variant='contained'
            sx={ButtonsProjectStyle}
            href={project.gitHub}
            target='_blank'
            endIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button
            variant='contained'
            sx={ButtonsProjectStyle}
            href={project.demo}
            target='_blank'
            endIcon={<ComputerIcon />}
          >
            Live Demo
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
