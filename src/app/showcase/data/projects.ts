import { faFigma, faFlutter, faPython, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

export interface Project {
  id: number;
  title: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  img: {
    src: string,
    alt: string
    width?: number
    height?: number
  };
}


export const projectList: Project[] = [
  {
    id: 1,
    title: "Discord Manager Dashboard",
    description: `A dashboard built entirely in python 
    to manage users and subscriptions in a premium discord group`,
    keyFeatures: [
      "Automatically Assign Roles to users based on their subscription",
      "Import Users to Add and Remove List from Excel File",
      "Automatically kick users when their subscription end",
      "Subscriptions and Renewal Calculation", 
    ],
    techStack: [
      "figma",
      "python",
      "flet",
      "sqlite",
    ],
    img: {
      src: "discord-app.webp",
      alt: "",
      width: 64,
      height: 64,
    }
  },
  {
    id: 2,
    title: "ToDo App",
    description: `
      An elegant and intuitive ToDo application
      crafted entirely with Flutter.
    `,
    keyFeatures: [
      "Add to Do", 
      "Define Task Priority",
      "Specify Task Expiry Date",
      "Complete Tasks"
    ],
    techStack: [
      "flutter"
    ],
    img: {
      src: "flutter-to-do.png",
      alt: "",
    }
  },
]

export const getStackIcon = ( iconName: string ): IconDefinition | undefined => {
  switch (iconName) {
    case "figma":
      return faFigma;
    case "flet":
      return undefined
    case "flutter":
      return faFlutter;
    case "python":
      return faPython;
    case "sqlite":
      return faDatabase;
  
    default:
      return undefined;
  }
}

export const getStackIconSVG = ( iconName: string ): string | undefined => {
  switch (iconName) {
    case "figma":
      return "figma.svg";
    case "flet":
      return undefined
    case "flutter":
      return "flutter.svg";
    case "python":
      return "python.svg";
    case "sqlite":
      return "sqlite.svg";
      
    default:
      return undefined;
  }
}