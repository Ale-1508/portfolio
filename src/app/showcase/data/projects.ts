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
    title: "ye",
    description: "",
    keyFeatures: [
      "ye1", 
      "ye2",
    ],
    techStack: [
      "flutter"
    ],
    img: {
      src: "",
      alt: ""
    }
  },
]