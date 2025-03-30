export interface ExperiencePeriod {
  start: Date
  end?: Date // if date is null it means the experience is onGoing
}

export interface WorkExperiences {
  id: number
  company: string
  role: string
  description: string
  period: ExperiencePeriod
  achievements: string[]
}

export const workExperiences: WorkExperiences[] = [
  {
    id: 1,
    company: "Freelancer",
    role: "Software Developer",
    description: `
    With a rich experience in developing over 22 projects, 
    I've mastered a diverse array of technologies and frameworks, 
    including Python, TypeScript, Next.js, React, and Flutter. 
    My extensive work demonstrates a commitment to delivering 
    innovative and high-quality solutions.
    `,
    period: {
      start: new Date(2020, 8, 1)
    },
    achievements: [
      `Developed a comprehensive dashboard application using Python to manage over 1,000
      users in a premium Discord group, incorporating member handling functionalities via the
      Discord API.`,
      `Engineered a web scraping algorithm to extract and process HTML data reports into
      Excel files, reducing data handling time per row from 0.45 minutes to 0.075 minutes,
      achieving an overall improvement of 83.33%.`,
    ]
  },
  {
    id: 2,
    company: "Idea Grip",
    role: "Technical Support Specialist",
    description: `
    The company specializes in providing comprehensive 
    ERP software solutions for road haulages, 
    tailored for both Italian and international small to medium enterprises (PMI). 
    In my role, I manage the entire customer lifecycle from seamless 
    software installation and API integration to end-to-end training. 
    I ensure that any technical challenges are swiftly resolved, 
    ensuring a smooth and efficient user experience.
    `,
    period: {
      start: new Date(2023, 6, 1),
      end: new Date(2025, 1, 2)
    },
    achievements: [
      `Optimized software download process, achieving a 62.5% reduction in time by
      implementing process improvements and developing Python automation scripts to
      expedite tasks.`,
      `Streamlined API installation process, resulting in a 66.7% reduction in time by enhancing
      procedures and creating Python automation scripts.`,
      `Authored comprehensive software documentation to enhance error detection and
      resolution, reducing the time required to address software errors by 75%.`,
      `Enhanced software update efficiency, reducing update time by 80%.`,
      `Developed Python scripts to automate the copying of backups across multiple locations,
      enhancing security measures and ensuring data integrity.`,
      `Conducted end-to-end training for 35+ customers on software usage and resolved
      software-related issues for over 100 customers ensuring optimal user satisfaction.`,
    ]
  },
  {
    id: 3,
    company: "Made Software",
    role: "Full-Stack Web Developer",
    description: `
    The company provides a comprehensive web application solution specifically designed for glassworking companies, 
    streamlining essential processes such as order management, production planning, and invoicing. 
    The software is meticulously crafted to enhance operational efficiency and optimize workflow within the glassworking industry.

    In addition, the platform seamlessly integrates with industry-leading software 
    developed by a major international player in the flat glassworking sector. 
    This integration ensures compatibility, scalability, and added value for clients, 
    empowering them to leverage cutting-edge technology to meet their business needs.
    `,
    period: {
      start: new Date(2025, 1, 2)
    },
    achievements: [
      `Enhanced Accessibility and Efficiency: Implemented a text-to-speech service with multilingual support, 
      significantly improving accessibility for users and reducing 
      the time required to transition order data from paper to digital systems.`,
      `Streamlined License Management: Developed a comprehensive license management system 
      to efficiently handle various license types, ensuring seamless operations and improved scalability.`,
      `Empowered End-Users: Designed and built a robust module enabling customers of the client to independently 
      create and manage their own orders, enhancing user autonomy and satisfaction.`,
    ]
  },
]