import { ProjectType, UiUxProjectType } from '../../types/types';
import TsukiyaImgURL from '../../public/images/Tsukiya.png';
import FridgefyImg from '../../public/images/Fridgefy.png';
import CornerstoneConnectImg from '../../public/images/cornerstone-connect.png';
import CashOut from '../../public/images/cash-out.png';
import TreesHeroImg from '../../public/images/hero-trees2x.png';
import issueDesign1 from '../../public/images/issueDesign1-4x.png';
import issueDesign2 from '../../public/images/issueDesign2-4x.png';
import issueNavigation2 from '../../public/images//issueNavigation2.png';
import issueNavigation1 from '../../public/images//issueNavigation1.png';
import issueContent1 from '../../public/images/issueContent1.jpeg';
import issueContent2 from '../../public/images/issueContent2.jpeg';
import heuristic from '../../public/images/heurisctic-evaluation2x.jpg';
import personas from '../../public/images/personas.png';
import cardSorting from '../../public/images/card-sorting.jpg';
import cognitive2 from '../../public/images/cognitive-walkthrough1.png';
import competitors from '../../public/images/competitors.png';
import wireframe from '../../public/images/wireframe.jpg';
import mockups from '../../public/images/mockups.jpg';
import easierAfter from '../../public/images/easier-after.jpg';
import easierBefore from '../../public/images/easier-before.jpg';
import navigationBefore from '../../public/images/navigation-before.jpg';
import navigationAfter from '../../public/images/navigation-after.jpg';
import brandBefore from '../../public/images/brand-before.jpg';
import brandAfter from '../../public/images/brand-after.jpg';
import contentBefore from '../../public/images/content-before.jpg';
import contentAfter from '../../public/images/content-after.jpg';
import menuBefore from '../../public/images/menu-before.jpg';
import menuAfter from '../../public/images/menu-after.jpg';
import detailImage1Src from '../../public/images/detail1-home-heuristic.jpg';
import detailImage2Src from '../../public/images/detail2-whosale-heuristic.jpg';

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
            issue1Title: 'Not mobile-friendly Layout',

            issue1Description:
              'The menu and content were not optimized for mobile devices, leading to poor usability.',
            issue2Title: 'Accessibility Issues',
            issue2Description:
              'Text has a high accessibility issue, making it impossible to read.',
            image1Src: issueDesign1,
            image2Src: issueDesign2,
          },
          {
            subtitle: 'Navigation',
            screenshotType: 'mobileAsymmetricInverted',
            content:
              'The original navigation lacked clear hierarchy and failed to follow standard mobile patterns, making it hard for users to find what they need.',

            issue1Title: 'Content Not Prioritized',
            issue1Description:
              'The homepage highlights less important content, while essential actions are hidden or unclear.',

            issue2Title: 'Hard-to-Find Information',
            issue2Description:
              'Key elements like the menu and store details are not easy to locate or access.',

            image1Src: issueNavigation1, // homepage screenshot
            image2Src: issueNavigation2, // mobile menu screenshot
          },
          {
            subtitle: 'Content Balance',
            screenshotType: 'mobileAsymmetric',
            content:
              'Content balance within the app was uneven, with some sections overloaded with information while others were sparse, leading to a disjointed user experience.',

            issue1Title: 'Content Overload',
            issue1Description:
              'Certain sections were overloaded with information, making it difficult for users to find what they needed.',

            issue2Title: 'Homepage Feels Promotional',
            issue2Description:
              'The homepage focuses too much on business-related content, reducing clarity and value for the end user.',

            image1Src: issueContent2,
            image2Src: issueContent1,
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
                imageSrc: heuristic,
                summary:
                  'The heuristic evaluation revealed numerous high-severity usability issues, particularly in the areas of aesthetic and minimalist design and consistency and standards. Major problems included poor text contrast (e.g., white on green or image backgrounds), inconsistent button styles, misaligned titles, and irregular spacing throughout the interface. These issues compromise readability, visual hierarchy, and user confidence. Additionally, elements like inactive buttons and inconsistent layout behaviors further hindered usability. Addressing these problems was critical to improving both the visual clarity and user experience of the interface.',
                detailTitle1: 'Aesthetic and Minimalist Design',
                detail1:
                  'We found several contrast issues on the website, such as white text on a green background, and a highlighted header element that is too dark.',
                imgDetail1Src: detailImage1Src,
                detailTitle2: 'Aesthetic and Minimalist Design',
                detail2:
                  'In the header, the underline is too far from the active menu item, which affects visual clarity and may confuse users.',
                imgDetail2Src: detailImage2Src,
              },
              {
                name: 'Persona Development',
                imageSrc: personas,
                summary:
                  'Our persona development process revealed three key user archetypes: \nMaya, a remote worker seeking quiet cafés with work-friendly amenities; \nLeo, a selective coffee enthusiast focused on ethically sourced, organic beans; and \nYuki, an international student looking for cozy, social spots with sweet treats. \nThese personas highlighted diverse user needs—from clear Wi-Fi and seating info to visually accessible menus and detailed product sourcing—which guided both content prioritization and interface decisions throughout the redesign.',
                description:
                  'Creation of data-driven personas that reflect real user goals, needs, and frustrations, providing clear guidance for design decisions.',
              },
              {
                name: 'Card Sorting',
                description:
                  'User-driven card sorting sessions to better understand how users categorize and navigate information.',
                imageSrc: cardSorting,
                summary:
                  'Through card sorting sessions, we identified major usability issues in the site\'s information architecture. Users struggled to locate key sections such as "Our Products," which lacked clarity, and many expected it under a more intuitive category. Additionally, important items like "Catering Order" were buried under unrelated sections like "Online Order," and some menus were hidden inside the "About" page. Based on these findings, we reorganized the site navigation to better reflect user expectations and improve content discoverability.',
              },
              {
                name: 'Cognitive Walkthrough (2)',
                description:
                  'Task-based analysis simulating user behavior to uncover friction points and improve task flows.',
                imageSrc: cognitive2,
                summary:
                  'Task 1 – Checking the Drink Menu\n' +
                  'The term "Our Products" caused confusion among users. It lacked clarity and didn’t lead to the expected menu content, failing to meet user expectations for discovering drink options.\n\n' +
                  'Task 2 – Ordering Online (In-Person Pickup):\n' +
                  'Users faced issues due to poor proximity between elements. Key controls were not clearly grouped or placed logically, increasing cognitive load and making the task harder to complete.',
              },
              {
                name: 'Competitor Analysis',
                imageSrc: competitors,
                summary:
                  'Our competitor analysis highlighted strong patterns in mobile usability, clear brand identity, and intuitive navigation. All competitors offered fully responsive designs with clean visual styles and consistent branding. Their websites prioritized mobile access, providing streamlined user flows and well-structured categories. Across the board, the tone was friendly and accessible, with attention to accessibility standards such as color contrast. While minor UX flaws were noted, the overall experience across these competitors was cohesive, functional, and visually engaging.',
                description:
                  'Benchmarking against similar applications to identify best practices and areas for differentiation.',
              },
            ],
          },
          {
            subtitle: 'Wireframing',
            image1Src: wireframe,
            content:
              'Based on the research insights, we designed low-fidelity wireframes to test structural improvements and validate navigation flows.',
          },
          {
            subtitle: 'High-Fidelity Mockups',
            image1Src: mockups,
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
            title: 'Easier Café Discovery',
            description:
              'We redesigned the “Locations” page to make it easier for users to find nearby branches quickly and intuitively.',
            afterImgSrc: easierAfter,
            beforeImgSrc: easierBefore,
          },
          {
            title: 'Simplified Navigation',
            description:
              'The navigation menu was restructured with improved contrast, simplified labels, and better accessibility to help users find what they need faster.',
            afterImgSrc: navigationAfter,
            beforeImgSrc: navigationBefore,
          },
          {
            title: 'Stronger Brand Expression',
            description:
              'While preserving brand colors, the new homepage is cleaner and highlights the brand’s three main pillars more effectively.',
            afterImgSrc: brandAfter,
            beforeImgSrc: brandBefore,
          },
          {
            title: 'Content Balance',
            description:
              'Content is now more evenly distributed, reducing clutter in some areas and adding valuable information where it was missing.',
            afterImgSrc: contentAfter,
            beforeImgSrc: contentBefore,
          },
          {
            title: 'Streamlined Menu Navigation',
            description:
              'The confusing “Our Products” section was replaced with a proper “Menu” that clearly displays available items, improving discoverability.',
            afterImgSrc: menuAfter,
            beforeImgSrc: menuBefore,
          },
        ],
      },
    ],
  },
};
