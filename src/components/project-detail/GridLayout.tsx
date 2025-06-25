import React from 'react';
import { Box, Grid } from '@mui/material';

type Props = {
  children: React.ReactNode[];
  layout?:
    | 'default'
    | 'mobileSideBySide'
    | 'mobileAsymmetric'
    | 'mobileAsymmetricInverted';
};

// Layouts que usam <Grid container>
const flexLayouts = {
  mobileSideBySide: {
    container: { spacing: 6, justifyContent: 'center' },
    items: [
      { xs: 12, sm: 8, md: 5 },
      { xs: 12, sm: 8, md: 5 },
    ],
  },
} as const;

type FlexLayoutKey = keyof typeof flexLayouts;

// Layouts que usam CSS Grid (gridTemplateAreas)
const gridLayouts = {
  mobileAsymmetric: {
    container: { spacing: 0, alignItems: 'stretch' },
    gridTemplateAreas: {
      xs: `
        "image1"
        "card1"  
        "spacer"
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
  mobileAsymmetricInverted: {
    container: { spacing: 0, alignItems: 'stretch' },
    gridTemplateAreas: {
      xs: `
        "card2"
        "image2"  
        "spacer"
        "card1"
        "image1"
      `,
      md: `
        ". . image2 card2"
        ". image1 image2 ."
        ". image1 image2 ."
        "card1 image1 . ."
      `,
    },
  },
} as const;

type GridLayoutKey = keyof typeof gridLayouts;

function GridLayout({ children, layout = 'default' }: Props) {
  if (layout in gridLayouts) {
    const gridLayout = gridLayouts[layout as GridLayoutKey];

    return (
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr' },
          gridTemplateRows: {
            xs: 'auto auto 4rem auto auto',
            md: '0.8fr 1fr 1fr 0.5fr',
          },
          gridTemplateAreas: gridLayout.gridTemplateAreas,
          gap: { xs: 1, md: 0 },
          minHeight: '600px',
          width: '100%',
        }}
      >
        {children}
        <Box
          sx={{
            gridArea: 'spacer',
            display: { xs: 'block', md: 'none' },
          }}
        />
      </Box>
    );
  }

  const currentLayout = flexLayouts[layout as FlexLayoutKey] || {
    container: { spacing: 6 },
    items: [],
  };

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
