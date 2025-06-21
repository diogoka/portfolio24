import React from 'react';
import { Box, Grid } from '@mui/material';

type Props = {
  children: React.ReactNode[];
  layout?:
    | 'default'
    | 'mobileSideBySide'
    | 'mobileAsymmetric'
    | 'desktopWithSideCards';
};

function GridLayout({ children, layout = 'default' }: Props) {
  const layouts = {
    // Layout para mobile screenshots lado a lado
    mobileSideBySide: {
      container: { spacing: 6, justifyContent: 'center' },
      items: [
        { xs: 12, sm: 8, md: 5 },
        { xs: 12, sm: 8, md: 5 },
      ],
    },

    // Layout mobile com posicionamento assimétrico
    mobileAsymmetric: {
      container: { spacing: 0, alignItems: 'stretch' },
      gridTemplateAreas: {
        xs: `
          "image1"
          "card1"  
          "image2"
          "card2"
          `,
        md: `
          ". image1 . ."
          "card1 image1 image2 ."
          ". image1 image2 ."
          ". . image2 card2"
        `,
      },
    },
  };

  if (layout === 'desktopWithSideCards' || layout === 'mobileAsymmetric') {
    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr' },
          gridTemplateRows: '0.8fr 1fr 1fr 0.5fr',
          gridTemplateAreas: layouts[layout].gridTemplateAreas,
          gap: 0,
          minHeight: '600px',
          width: '100%',
        }}
      >
        {children}
      </Box>
    );
  }

  // Layout padrão com Grid do MUI
  const currentLayout = layouts[layout] || layouts.mobileSideBySide;

  return (
    <Grid container {...currentLayout.container}>
      {children.map((child, index) => (
        <Grid
          key={index}
          item
          {...(currentLayout.items?.[index] || { xs: 12 })}
        >
          {child}
        </Grid>
      ))}
    </Grid>
  );
}

export default GridLayout;
