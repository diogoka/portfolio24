import { Box, Typography, Link } from '@mui/material'
import { ProjectType } from '../../types/types'
import GitHubImage from '../../public/images/githubIconblue.png'
import DemoImage from '../../public/images/demonstrationIcon.png'
import useMediaQuery from '@mui/material/useMediaQuery'

type Props = {
  project: ProjectType
}

export default function Project({ project }: Props) {
  const isMobile = useMediaQuery('(max-width:1100px)')
  const ProjectContainerStyle = {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      lg: 'row',
    },
    justifyContent: 'space-between',
    alignItems: 'center',
    rowGap: isMobile ? '5px' : '0',
  }

  const ProjectDescriptionContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '16px',
    maxWidth: isMobile ? '100%' : '50%',
    gap: '7px',
  }

  const ProjectNameStyle = {
    fontSize: '1.8rem',
    fontWeight: '500',
    fontStyle: 'italic',
    textAlign: 'center',
  }

  const ProjectDescriptionStyle = {
    textAlign: 'justify',
    textJustify: 'inter-word',
    marginBottom: isMobile ? '8px' : '3px',
  }

  const ButtonsProjectStyle = {
    width: '55px',
    transition: 'all 0.1s ease-in-out',
    '&:hover': {
      transform: 'translateY(-0.3px)',
      opacity: '0.8',
    },
    '&:active': {
      transform: 'translateY(-0.3px)',
    },
  }

  return (
    <Box sx={ProjectContainerStyle}>
      {isMobile && (
        <Typography sx={ProjectNameStyle}>{project.name}</Typography>
      )}
      <Box
        sx={{
          maxWidth: '30rem',
          minWidth: '20rem',
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
          window.open(project.demo, '_blank')
        }}
      >
        <img
          src={project.image}
          style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
        />
      </Box>
      <Box sx={ProjectDescriptionContainerStyle}>
        {!isMobile && (
          <Typography sx={ProjectNameStyle}>{project.name}</Typography>
        )}
        <Typography sx={ProjectDescriptionStyle}>
          {project.description}
        </Typography>

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
            gap: '60px',
          }}
        >
          <Box sx={ButtonsProjectStyle}>
            <Link href={project.gitHub} target="_blank">
              <img src={GitHubImage} style={{ width: '100%' }} />
            </Link>
          </Box>
          <Box sx={ButtonsProjectStyle}>
            <Link href={project.demo} target="_blank">
              <img src={DemoImage} style={{ width: '100%' }} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
