import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TreesRedesignProject } from '../components/projects/ProjectList';
import ProjectHero from '../components/project-detail/ProjectHero';
import ProjectInfo from '../components/project-detail/ProjectInfo';
import BeginningSection from '../components/project-detail/BeginningSection';
import ProcessSection from '../components/project-detail/ProcessSection';
import ConclusionSection from '../components/project-detail/ConclusionSection';

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = TreesRedesignProject[id as keyof typeof TreesRedesignProject];

  if (!project) {
    return (
      <Box sx={{ py: 8 }}>
        <Typography variant='h4' gutterBottom>
          Projeto não encontrado
        </Typography>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant='contained' startIcon={<ArrowBackIcon />}>
            Back to home page
          </Button>
        </Link>
      </Box>
    );
  }

  return (
    <Box>
      {/* Botão Voltar */}
      <Box sx={{ py: 2 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#2d2e32',
              '&:hover': { color: '#F58220' },
            }}
          >
            Back to home page.
          </Button>
        </Link>
      </Box>

      {/* Hero Banner */}
      <ProjectHero project={project} />

      {/* Project Info */}
      <ProjectInfo project={project} />

      {/* Conteúdo Principal */}
      <Box sx={{ py: 6 }}>
        {/* Introdução */}
        <Typography
          variant='body1'
          sx={{
            fontSize: '1.2rem',
            lineHeight: 1.7,
            color: '#555',
            maxWidth: '800px',
            mx: 'auto',
            textAlign: 'center',
            mb: 8,
          }}
        >
          {project.description}
        </Typography>

        {/* Seções principais */}
        {project.sections.map((section, sectionIndex) => (
          <Box key={sectionIndex} sx={{ mb: 10 }}>
            {/* Título da seção */}
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontWeight: 700,
                mb: 4,
                color: '#2d2e32',
                fontSize: { xs: '2.5rem', md: '3rem' },
                textAlign: 'center',
              }}
            >
              {section.title}
            </Typography>

            {/* Texto introdutório */}
            <Typography
              variant='body1'
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.7,
                color: '#555',
                mb: 6,
                textAlign: 'center',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              {section.intro}
            </Typography>

            {/* Renderizar seção específica */}
            {section.title === 'The Beginning' && (
              <BeginningSection section={section} />
            )}

            {section.title === 'The Process' && (
              <ProcessSection section={section} />
            )}

            {section.title === 'The Conclusion' && (
              <ConclusionSection section={section} />
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ProjectDetail;
