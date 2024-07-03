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
} from '@mui/material'
import Links from '../components/header/Links'
import { Link as ScrollLink } from 'react-scroll'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import MenuIcon from '@mui/icons-material/Menu'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import InfoIcon from '@mui/icons-material/Info'

function Header() {
  const isMobile = useMediaQuery('(max-width:700px)')

  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const ContainerStyle = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '1rem',
    paddingBottom: '1rem',
    backgroundColor: '#fff',
    boxShadow: '1px 0.5px 10px rgba(0, 0, 0, 0.25)',
    minWidth: '100vw',
    width: '100vw',
    zIndex: 90,
  }

  const ListItemStyle = {
    transition: 'all 0.3s ease-in-out',
    color: '#2d2e32',
    fontSize: '1.1rem',
    fontWeight: '700',
  }

  const IconSelector = (index: number) => {
    switch (index) {
      case 0:
        return <AccountTreeIcon sx={{ color: '#F58220' }} />
      case 1:
        return <InfoIcon sx={{ color: '#F58220' }} />
      case 2:
        return <ContactMailIcon sx={{ color: '#F58220' }} />
      case 3:
        return <InboxIcon sx={{ color: '#F58220' }} />
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Projects', 'About', 'Contact', 'Resume'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{IconSelector(index)}</ListItemIcon>
              <ListItemText
                primary={
                  <Box
                    component={ScrollLink}
                    to={text.toLocaleLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-70}
                  >
                    {text}
                  </Box>
                }
                disableTypography
                sx={ListItemStyle}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Container sx={ContainerStyle}>
      <Box
        component={ScrollLink}
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className="menu-hover"
        sx={{
          textDecoration: 'none',
          color: '#2d2e32',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingLeft: isMobile ? '1rem' : '4.5rem',
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
            anchor="right"
            sx={{ zIndex: 9999 }}
          >
            {DrawerList}
          </Drawer>
        </>
      ) : (
        <Links />
      )}
    </Container>
  )
}

export default Header
