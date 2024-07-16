import { ProjectType } from '../../types/types';
import TsukiyaImgURL from '../../public/images/Tsukiya.png';
import FridgefyImg from '../../public/images/Fridgefy.png';
import CornerstoneConnectImg from '../../public/images/cornerstone-connect.png';
import CashOut from '../../public/images/cash-out.png';

export const EventllegeProject: ProjectType = {
  name: 'Cornerstone Connect',
  image: `${CornerstoneConnectImg}`,
  techStack:
    'NextJS, TypeScript, MaterialUI, NodeJS, TypeScript, Firebase, PostgreSQL.',
  description: `As a leader and responsible for develop both back and frontend, I built a platform for college event management, allowing organizers to create and oversee events, track attendance, and generate reports. 
  Students can track their attended events and leave reviews to assist others.`,
  demo: 'https://cornerstone-connect.ca',
  gitHub: 'https://github.com/diogoka/eventllege',
};

export const CashOutAppProject: ProjectType = {
  name: 'Cash-out App',
  image: `${CashOut}`,
  techStack: 'NextJS, TypeScript, Zustand, TailWind',
  description: `This program streamlines the bar cash-out process, reducing the time from 15-20 minutes to 5-10 minutes. 
    This saves about 10 minutes per cash-out, totaling 20 minutes daily and 10 hours monthly. This efficiency allows bartenders to focus on other tasks, saving employers valuable labor hours. Obs.: Made only to be used on mobile devices.`,
  demo: 'https://cash-out-app.vercel.app/',
  gitHub: 'https://github.com/diogoka/cash-out-app',
};

export const RestaurantProject: ProjectType = {
  name: 'Restaurant Redesign',
  image: `${TsukiyaImgURL}`,
  techStack: 'HTML, CSS, SaSS, JavaScript',
  description: `I've recently reimagined my favorite restaurant's website! With a fresh redesign, 
  the site now offers a more intuitive layout, mouthwatering visuals of their dishes.`,
  demo: 'https://diogoka.github.io/final-project-wmad2023/',
  gitHub: 'https://github.com/diogoka/final-project-wmad2023',
  olderSite: 'https://ryugetsuservices.wixsite.com/tsukiya',
};

export const FridgeFyProject: ProjectType = {
  name: 'FridgeFy',
  image: `${FridgefyImg}`,
  techStack: 'React, JavaScript, Styled Components, Firebase',
  description: `FridgeFy is a culinary app with a wide range of recipes for all tastes and diets. 
  Whether you're a seasoned chef or a beginner, find quick weeknight meals or show-stopping desserts to enjoy a flavorful adventure in the kitchen!`,
  demo: 'https://fridgefy.onrender.com/',
  gitHub: 'https://github.com/diogoka/final-project-react-devteamddgm',
};
