import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Box } from '@mui/material';

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
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project/:id' element={<ProjectDetail />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}

export default App;
