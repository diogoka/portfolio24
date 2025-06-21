import { ProjectType, UiUxProjectType } from '../../types/types';
import TsukiyaImgURL from '../../public/images/Tsukiya.png';
import FridgefyImg from '../../public/images/Fridgefy.png';
import CornerstoneConnectImg from '../../public/images/cornerstone-connect.png';
import CashOut from '../../public/images/cash-out.png';
import TreesHeroImg from '../../public/images/hero-trees2x.png';

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

export const TreesRedesignProject: Record<string, UiUxProjectType> = {
  'trees-redesign': {
    title: 'Trees Redesign',
    subtitle: 'Complete Redesign of the User Experience',
    description:
      'A comprehensive case study on the redesign of the Trees Organic Coffee website, focused on improving usability and enhancing the user experience through in-depth heuristic analysis and research-driven design.',
    heroImage: `${TreesHeroImg}`,
    projectInfo: {
      role: 'UI/UX Designer and UX Researcher',
      team: ['Diogo', 'Sae', 'Kayo'],
      time: '2 weeks',
      research: [
        'Persona Development',
        'Heuristic Evaluation',
        'User Testing',
        'Wireframing',
        'High-Fidelity Mockups',
      ],
    },
    sections: [
      {
        title: 'The Beginning',
        intro:
          'The Trees Redesign project originated from the need to significantly improve the user experience of the original website. Our initial assessments uncovered critical usability issues that directly impacted user satisfaction and task completion rates.',
        subsections: [
          {
            subtitle: 'Visual Design',
            content:
              'The original visual design suffered from inconsistent visual hierarchy, poor use of color, and typography choices that compromised readability and overall user comfort.',
            screenshotType: 'mobileAsymmetric',
            image1Src: '/images/trees-redesign/issue1.png',
            image2Src: '/images/trees-redesign/issue2.png',
          },
          {
            subtitle: 'Navigation',
            content:
              'Navigation within the app lacked structure and failed to follow established design patterns, leading to user confusion, high drop-off rates, and frustration in completing basic tasks.',
          },
        ],
      },
      {
        title: 'The Process',
        intro:
          'To address the problems identified, we followed a structured research and design process, combining both quantitative and qualitative methods to guide our decisions.',
        subsections: [
          {
            subtitle: 'UX Research',
            methods: [
              {
                name: 'Heuristic Evaluation',
                description:
                  'A systematic review of the interface using Nielsen’s usability principles to uncover critical usability flaws.',
              },
              {
                name: 'Persona Development',
                description:
                  'Creation of data-driven personas that reflect real user goals, needs, and frustrations, providing clear guidance for design decisions.',
              },
              {
                name: 'Card Sorting',
                description:
                  'User-driven card sorting sessions to better understand how users categorize and navigate information.',
              },
              {
                name: 'Cognitive Walkthrough',
                description:
                  'Task-based analysis simulating user behavior to uncover friction points and improve task flows.',
              },
              {
                name: 'Competitor Analysis',
                description:
                  'Benchmarking against similar applications to identify best practices and areas for differentiation.',
              },
            ],
          },
          {
            subtitle: 'Wireframing',
            content:
              'Based on the research insights, we designed low-fidelity wireframes to test structural improvements and validate navigation flows.',
          },
          {
            subtitle: 'High-Fidelity Mockups',
            content:
              'Once the wireframes were validated, we created high-fidelity mockups aligned with a newly established design system to ensure visual consistency and scalability.',
          },
        ],
      },
      {
        title: 'The Conclusion',
        intro:
          'The redesign led to substantial improvements in usability and overall user satisfaction. The final solution directly addressed all key issues identified during the research phase.',
        improvements: [
          {
            title: 'Improved Visual Hierarchy',
            description:
              'A revised typographic system and consistent use of color helped establish a clear and intuitive visual hierarchy.',
          },
          {
            title: 'Streamlined Navigation',
            description:
              'Complete restructuring of the menu and navigation flows based on user insights from card sorting exercises.',
          },
          {
            title: 'Consistent User Interface',
            description:
              'Introduction of a robust design system that ensures consistency across all screens and components.',
          },
        ],
      },
    ],
  },
};
