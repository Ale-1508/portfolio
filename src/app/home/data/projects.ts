export interface Project {
  id: number
  title: string
  description?: string
  link?: string
  stack: string[]
}

export const projects: Project[] = [
  {
    id:1,
    title:"Money Manager App",
    description:`
      A Flutter application designed to manage personal finances, 
      providing comprehensive control over expenses.
    `,
    link:"",
    stack: ["flutter"]
  },
  {
    id:2,
    title:"Shopping-Cart App",
    description:`
      A collaborative family application designed in Flutter to maintain 
      a shared shopping list, ensuring whoever visits the supermarket 
      first can purchase groceries and essentials for the family
    `,
    link:"",
    stack: ["flutter"]
  },
  {
    id:3,
    title:"Salary Analisys Website",
    description:`
      A website designed for individuals seeking to understand 
      their true earnings by revealing and eliminating 
      hidden costs from their salary.
    `,
    link:"",
    stack: ["nextjs"]
  },
  {
    id:4,
    title:"Artisans App",
    description:`
      A beautifully crafted app designed to showcase the charm 
      of Italian artisanal products and enhance sales for artisan shops
    `,
    link:"",
    stack: ["flutter"]
  },
  {
    id:5,
    title:"Med App",
    description:`I never remember to take meds when I'm sick and the default clock app is not meant to remember that`,
    link:"",
    stack: ["flutter"]
  },
  {
    id:6,
    title:"Sushi App",
    description:`I also never remember what I order at Sushi restaurants and that's my solution`,
    link:"",
    stack: ["flutter"]
  },
  {
    id:7,
    title:"Market Analysis Desktop App",
    description:`This project is secret and can't be shared`,
    link:"",
    stack: ["python"]
  },
  {
    id:7,
    title:"Weeb Social App and Website",
    description:`Social for people who love Anime, Videogames and Weeb Stuff`,
    link:"",
    stack: ["flutter", "nextjs"]
  },
]