import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { Section } from '../../types/types';

type Props = {
  section: Section;
};

function ProcessSection({ section }: Props) {
  return (
    <>
      {section.subsections &&
        section.subsections.map((sub, subIndex) => (
          <Box key={subIndex} sx={{ mb: 6 }}>
            <Typography
              variant='h4'
              sx={{
                fontWeight: 600,
                mb: 4,
                color: '#F58220',
                fontSize: { xs: '1.8rem', md: '2.2rem' },
              }}
            >
              {sub.subtitle}
            </Typography>

            {/* UX Research Methods */}
            {sub.methods &&
              sub.methods.map((method, methodIndex) => (
                <Box
                  key={methodIndex}
                  sx={{
                    mb: 12,
                    pl: 2,
                    borderLeft: '3px solid #F58220',
                  }}
                >
                  <Typography
                    variant='h5'
                    sx={{
                      fontWeight: 600,
                      mb: 2,
                      color: '#2d2e32',
                    }}
                  >
                    {method.name}
                  </Typography>

                  <Typography
                    variant='body1'
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#666',
                      mb: 3,
                    }}
                  >
                    {method.description}
                  </Typography>

                  {method.imageSrc && (
                    <Box
                      sx={{
                        width: '100%',
                        height: '250px',
                        backgroundColor: '#f8f8f8',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e0e0e0',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          cursor: 'pointer',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        },
                        mb: 2,
                      }}
                    >
                      <img
                        src={method.imageSrc}
                        alt={method.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                          transform:
                            method.name === 'Cognitive Walkthrough'
                              ? 'scale(1.08)'
                              : method.name === 'Heuristic Evaluation' ||
                                method.name === 'Card Sorting'
                              ? 'scale(1.03)'
                              : 'none ',
                        }}
                      />
                    </Box>
                  )}

                  {/* Optional Summary */}
                  {method.summary && (
                    <Typography
                      variant='body2'
                      sx={{
                        color: '#444',
                        fontStyle: 'italic',
                        lineHeight: 1.6,
                        whiteSpace: 'pre-line',
                        mb: 3,
                      }}
                    >
                      {method.summary}
                    </Typography>
                  )}

                  {/* Detail Cards */}
                  {(method.detail1 || method.detail2) && (
                    <Box sx={{ mt: 3 }}>
                      <Grid container spacing={3}>
                        {/* Detail Card 1 */}
                        {method.detail1 && method.detailTitle1 && (
                          <Grid item xs={12} md={6}>
                            <Card
                              sx={{
                                height: '100%',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                  transform: 'translateY(-2px)',
                                },
                              }}
                            >
                              <CardContent sx={{ p: 0 }}>
                                <Grid container>
                                  <Grid item xs={12} md={6}>
                                    <Box
                                      sx={{
                                        p: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <Typography
                                        variant='h6'
                                        sx={{
                                          fontWeight: 600,
                                          mb: 2,
                                          color: '#2d2e32',
                                          fontSize: {
                                            xs: '1.1rem',
                                            md: '1.2rem',
                                          },
                                        }}
                                      >
                                        {method.detailTitle1}
                                      </Typography>
                                      <Typography
                                        variant='body1'
                                        sx={{
                                          color: '#555',
                                          lineHeight: 1.6,
                                          fontSize: '0.9rem',
                                        }}
                                      >
                                        {method.detail1}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    {method.imgDetail1Src && (
                                      <Box
                                        sx={{
                                          height: { xs: '180px', md: '400px' },
                                          width: '100%',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <img
                                          src={method.imgDetail1Src}
                                          alt={method.detailTitle1}
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                          }}
                                        />
                                      </Box>
                                    )}
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        )}

                        {/* Detail Card 2 */}
                        {method.detail2 && method.detailTitle2 && (
                          <Grid item xs={12} md={6}>
                            <Card
                              sx={{
                                height: '100%',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease-in-out',
                                '&:hover': {
                                  boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                                  transform: 'translateY(-2px)',
                                },
                              }}
                            >
                              <CardContent sx={{ p: 0 }}>
                                <Grid container>
                                  <Grid item xs={12} md={6}>
                                    <Box
                                      sx={{
                                        p: 3,
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                      }}
                                    >
                                      <Typography
                                        variant='h6'
                                        sx={{
                                          fontWeight: 600,
                                          mb: 2,
                                          color: '#2d2e32',
                                          fontSize: {
                                            xs: '1.1rem',
                                            md: '1.2rem',
                                          },
                                        }}
                                      >
                                        {method.detailTitle2}
                                      </Typography>
                                      <Typography
                                        variant='body1'
                                        sx={{
                                          color: '#555',
                                          lineHeight: 1.6,
                                          fontSize: '0.9rem',
                                        }}
                                      >
                                        {method.detail2}
                                      </Typography>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} md={6}>
                                    {method.imgDetail2Src && (
                                      <Box
                                        sx={{
                                          height: { xs: '180px', md: '400px' },
                                          width: '100%',
                                          overflow: 'hidden',
                                        }}
                                      >
                                        <img
                                          src={method.imgDetail2Src}
                                          alt={method.detailTitle2}
                                          style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                          }}
                                        />
                                      </Box>
                                    )}
                                  </Grid>
                                </Grid>
                              </CardContent>
                            </Card>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  )}
                </Box>
              ))}

            {/* Wireframe/Mockup */}
            {sub.content && !sub.methods && (
              <>
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

                <Box
                  sx={{
                    width: '100%',
                    height: '400px',
                    backgroundColor: '#f8f8f8',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid #e0e0e0',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      cursor: 'pointer',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <img
                    src={sub.image1Src}
                    alt={sub.subtitle}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                </Box>
              </>
            )}
          </Box>
        ))}
    </>
  );
}

export default ProcessSection;
