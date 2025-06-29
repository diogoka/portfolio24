import {
  Box,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import Links from '../components/header/Links';
import { Link as ScrollLink } from 'react-scroll';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import MenuIcon from '@mui/icons-material/Menu';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';

function Header() {
  const isMobile = useMediaQuery('(max-width:700px)');
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // pequeno delay para garantir que o scroll funcione após navegação
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const ContainerStyle = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '1px 0.5px 10px rgba(0, 0, 0, 0.25)',
    minWidth: '100%',
    width: '100%',
    zIndex: 90,
    padding: {
      xs: '1rem',
      sm: '1rem 2rem',
      md: '1rem 2rem',
      lg: '1rem 3.5rem',
    },
  };

  const ListItemStyle = {
    transition: 'all 0.3s ease-in-out',
    color: '#2d2e32',
    fontSize: '1.1rem',
    fontWeight: '700',
  };

  const IconSelector = (index: number) => {
    switch (index) {
      case 0:
        return <HomeIcon sx={{ color: '#F58220' }} />;
      case 1:
        return <AccountTreeIcon sx={{ color: '#F58220' }} />;
      case 2:
        return <InfoIcon sx={{ color: '#F58220' }} />;
      case 3:
        return <ContactMailIcon sx={{ color: '#F58220' }} />;
      case 4:
        return <ContactPageIcon sx={{ color: '#F58220' }} />;
    }
  };

  const drawerComponent = (index: number, text: string) => {
    if (index === 4) {
      return (
        <a
          href={import.meta.env.VITE_REACT_RESUME_URL}
          download='resumeDiogo.pdf'
          target='_blank'
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          {text}
        </a>
      );
    } else {
      return (
        <Box
          component={ScrollLink}
          to={text.toLocaleLowerCase()}
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          onClick={toggleDrawer(false)}
        >
          {text}
        </Box>
      );
    }
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Projects', 'About', 'Contact', 'Resume'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>{IconSelector(index)}</ListItemIcon>
                <ListItemText
                  primary={drawerComponent(index, text)}
                  disableTypography
                  sx={ListItemStyle}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Container sx={ContainerStyle}>
      <Box
        onClick={handleLogoClick}
        sx={{
          textDecoration: 'none',
          color: '#2d2e32',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          cursor: 'pointer',
        }}
      >
        <Typography
          sx={{
            fontSize: '2.34rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease-in-out',
          }}
        >
          dk
        </Typography>
        <Typography
          sx={{ fontSize: '2.34rem', fontWeight: 'bold', color: '#F58220' }}
        >
          a
        </Typography>
      </Box>

      {isMobile ? (
        <>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: '#F58220' }} />
          </Button>
          <Drawer
            open={open}
            onClose={toggleDrawer(false)}
            anchor='right'
            sx={{ zIndex: 9999 }}
          >
            {DrawerList}
          </Drawer>
        </>
      ) : (
        <Links />
      )}
    </Container>
  );
}

export default Header;
