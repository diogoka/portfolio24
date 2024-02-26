import { ProjectType } from "../../types/types";
import EventllegeImgURL from "../../public/images/Eventllege.png";
import TsukiyaImgURL from "../../public/images/Tsukiya.png";
import FridgefyImg from "../../public/images/Fridgefy.png";

export const EventllegeProject: ProjectType = {
  name: "Eventllege",
  image: `${EventllegeImgURL}`,
  techStack:
    "NextJS, TypeScript, MaterialUI, NodeJS, TypeScript, Firebase, PostgreSQL.",
  description: `The platform is designed for college event management, allowing organizers to create and oversee events while generating attendance reports. 
  Students can use the platform to track the events they've attended and leave reviews to assist others.`,
  demo: "eventllege-ciccconrender.com",
  gitHub: "https://github.com/diogoka/eventllege",
};

export const RestaurantProject: ProjectType = {
  name: "Restaurant Redesign",
  image: `${TsukiyaImgURL}`,
  techStack: "HTML, CSS, SaSS, JavaScript",
  description: `I've recently reimagined my favorite restaurant's website! With a fresh redesign, 
  the site now offers a more intuitive layout, mouthwatering visuals of their dishes.`,
  demo: "https://diogoka.github.io/final-project-wmad2023/",
  gitHub: "https://github.com/diogoka/final-project-wmad2023",
};

export const FridgeFyProject: ProjectType = {
  name: "FridgeFy",
  image: `${FridgefyImg}`,
  techStack: "React, JavaScript, Styled Components, Firebase",
  description: `FridgeFy is a culinary app with a wide range of recipes for all tastes and diets. 
  Whether you're a seasoned chef or a beginner, find quick weeknight meals or show-stopping desserts to enjoy a flavorful adventure in the kitchen!`,
  demo: "https://fridgefy.onrender.com/",
  gitHub: "https://github.com/diogoka/final-project-react-devteamddgm",
};
