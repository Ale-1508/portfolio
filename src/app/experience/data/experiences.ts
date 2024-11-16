export interface WorkExperiences {
  id: number
  title: string
  role: string
  description: string
  period: { 
    start:Date 
    end?:Date // if date is null it means the experience is onGoing
  }
  achievements: string[]
}

export const workExperiences: WorkExperiences[] = [
  {
    id: 1,
    title: "Freelancer",
    role: "Software Developer",
    description: `
    With a rich experience in developing over 22 projects, 
    I've mastered a diverse array of technologies and frameworks, 
    including Python, TypeScript, Next.js, React, and Flutter. 
    My extensive work demonstrates a commitment to delivering 
    innovative and high-quality solutions.
    `,
    period: { 
      start:new Date(2020, 8, 1)
    },
    achievements: [""]
  }, 
  {
    id: 2,
    title: "Idea Grip",
    role: "Technical Support Specialist",
    description: `
    The company specializes in providing comprehensive 
    ERP software solutions for road haulages, 
    tailored for both Italian and international small to medium enterprises (PMI). 
    In my role, I manage the entire customer lifecycle—from seamless 
    software installation and API integration to end-to-end training. 
    I ensure that any technical challenges are swiftly resolved, 
    ensuring a smooth and efficient user experience.
    `,
    period: { 
      start:new Date(2020, 8, 1)
    },
    achievements: [""]
  }, 
]