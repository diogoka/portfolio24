import Header from './pages/Header'
import Hero from './pages/Hero'
import Footer from './pages/Footer'
import Work from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import { Box } from '@mui/material'

function App() {
  return (
    <>
      <Header />
      <Box
        sx={{
          paddingLeft: { xs: '2rem', sm: '14.8%' },
          paddingRight: { xs: '2rem', sm: '14.8%' },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Hero />
        <Work />
        <About />
        <Contact />
      </Box>
      <Footer />
    </>
  )
}

export default App
