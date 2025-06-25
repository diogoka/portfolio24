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
          Project not found
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

        {/* Conclusão Final */}
        <Box
          sx={{
            mb: 10,
            py: 8,
            backgroundColor: '#f8f9fa',
            borderRadius: '16px',
            mx: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontWeight: 700,
              mb: 6,
              color: '#2d2e32',
              fontSize: { xs: '2.5rem', md: '3rem' },
              textAlign: 'center',
            }}
          >
            Final Reflection
          </Typography>

          <Typography
            variant='body1'
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.8,
              color: '#555',
              maxWidth: '900px',
              mx: 'auto',
              textAlign: 'center',
              px: 3,
            }}
          >
            With the new design proposal, the Trees Organic Coffee website has
            achieved significant improvements in{' '}
            <strong style={{ color: '#F58220' }}>
              accessibility and usability
            </strong>
            . The redesign addresses critical{' '}
            <strong style={{ color: '#F58220' }}>contrast ratios</strong> for
            WCAG compliance, ensuring text readability across all device types.
            The interface now maintains{' '}
            <strong style={{ color: '#F58220' }}>visual consistency</strong>{' '}
            through standardized{' '}
            <strong style={{ color: '#F58220' }}>design patterns</strong>,
            unified typography hierarchy, and consistent spacing systems.
            <br />
            <br />
            Brand integrity has been preserved while implementing a{' '}
            <strong style={{ color: '#F58220' }}>
              cohesive color palette
            </strong>{' '}
            that respects the original brand guidelines. The new{' '}
            <strong style={{ color: '#F58220' }}>
              information architecture
            </strong>{' '}
            follows established{' '}
            <strong style={{ color: '#F58220' }}>UX standards</strong>,
            improving{' '}
            <strong style={{ color: '#F58220' }}>cognitive load</strong> and{' '}
            <strong style={{ color: '#F58220' }}>task completion rates</strong>.
            Mobile responsiveness has been enhanced through{' '}
            <strong style={{ color: '#F58220' }}>progressive disclosure</strong>{' '}
            and <strong style={{ color: '#F58220' }}>adaptive layouts</strong>,
            ensuring optimal user experience across all breakpoints.
            <br />
            <br />
            This comprehensive redesign demonstrates how{' '}
            <strong style={{ color: '#F58220' }}>
              user-centered design principles
            </strong>{' '}
            and{' '}
            <strong style={{ color: '#F58220' }}>
              evidence-based research
            </strong>{' '}
            can transform a digital experience while maintaining brand
            authenticity and achieving measurable usability improvements.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProjectDetail;
