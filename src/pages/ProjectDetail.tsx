import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Button, Container, Chip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Dados dos projetos (você pode mover isso para um arquivo separado ou contexto)
const projectsData = {
  'trees-redesign': {
    title: 'Trees Organic Coffee Redesign',
    subtitle: 'Redesign completo da experiência do usuário',
    description:
      'Este case study apresenta o processo completo de redesign de um aplicativo de delivery, desde a pesquisa inicial até a implementação final.',
    tags: ['UI/UX Design', 'UX Research', 'Prototyping', 'Figma'],
    image: '/images/project-hero.jpg', // substitua pelo caminho da sua imagem
    sections: [
      {
        title: 'Problema',
        content:
          'O aplicativo original apresentava alta taxa de abandono no checkout e feedback negativo dos usuários sobre a complexidade da interface.',
      },
      {
        title: 'Processo de Pesquisa',
        content:
          'Conduzi entrevistas com 15 usuários, análise competitiva e mapeamento da jornada do usuário atual para identificar pontos de dor.',
      },
      {
        title: 'Solução',
        content:
          'Desenvolvi uma nova arquitetura de informação, simplificando o fluxo de checkout em 3 etapas e criando um design system consistente.',
      },
      {
        title: 'Resultados',
        content:
          'Aumento de 40% na taxa de conversão, redução de 60% no tempo de checkout e melhoria significativa na satisfação do usuário.',
      },
    ],
  },
  // Adicione mais projetos aqui
};

function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData[id as keyof typeof projectsData];

  if (!project) {
    return (
      <Container maxWidth='lg' sx={{ py: 8 }}>
        <Typography variant='h4' gutterBottom>
          Projeto não encontrado
        </Typography>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button variant='contained' startIcon={<ArrowBackIcon />}>
            Back to home page
          </Button>
        </Link>
      </Container>
    );
  }

  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      {/* Botão Voltar */}
      <Box sx={{ mb: 4 }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              color: '#2d2e32',
              '&:hover': { color: '#F58220' },
            }}
          >
            Back to home
          </Button>
        </Link>
      </Box>

      {/* Header do Projeto */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant='h2'
          component='h1'
          sx={{
            fontWeight: 700,
            mb: 2,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant='h5'
          sx={{
            color: '#767676',
            mb: 3,
            fontWeight: 400,
          }}
        >
          {project.subtitle}
        </Typography>

        <Typography
          variant='body1'
          sx={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            mb: 3,
          }}
        >
          {project.description}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              sx={{
                backgroundColor: '#F58220',
                color: 'white',
                fontWeight: 500,
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Imagem Principal */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', md: '400px' },
          backgroundColor: '#f0f0f0',
          borderRadius: 2,
          mb: 6,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h6' color='text.secondary'>
          [Imagem do Projeto]
        </Typography>
      </Box>

      {/* Seções do Case Study */}
      {project.sections.map((section, index) => (
        <Box key={index} sx={{ mb: 6 }}>
          <Typography
            variant='h4'
            component='h2'
            sx={{
              fontWeight: 600,
              mb: 3,
              color: '#2d2e32',
            }}
          >
            {section.title}
          </Typography>

          <Typography
            variant='body1'
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#555',
            }}
          >
            {section.content}
          </Typography>

          {/* Placeholder para imagens das seções */}
          <Box
            sx={{
              width: '100%',
              height: '300px',
              backgroundColor: '#f8f8f8',
              borderRadius: 2,
              mt: 3,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='body2' color='text.secondary'>
              [Imagem - {section.title}]
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Call to Action */}
      <Box
        sx={{
          textAlign: 'center',
          py: 6,
          borderTop: '1px solid #e0e0e0',
          mt: 6,
        }}
      >
        <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
          Gostou do projeto?
        </Typography>
        <Typography variant='body1' sx={{ mb: 4, color: '#666' }}>
          Vamos conversar sobre como posso ajudar no seu próximo projeto
        </Typography>
        <Link to='/#contact' style={{ textDecoration: 'none' }}>
          <Button
            variant='contained'
            size='large'
            sx={{
              backgroundColor: '#F58220',
              '&:hover': {
                backgroundColor: '#e6741d',
              },
              px: 4,
              py: 1.5,
            }}
          >
            Entre em Contato
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default ProjectDetail;
