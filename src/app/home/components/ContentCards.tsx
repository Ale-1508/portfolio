"use client"

import { useEffect, useState } from "react"
import classNames from 'classnames';
import Image from 'next/image'
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { activePalette } from "@/logic/_core/common/colors";

const cards = [
  {
    id:1,
    title: "About Me",
    callToAction: "",
    description: "",
    img: "about-me.svg",
    link: "/about",
    large: false,
    alt: "Picture of Me"
  },
  {
    id:2,
    title: "Articles",
    callToAction: "Read my latest Articles",
    description: `Welcome to my "Articles" section! Here, 
    I share my experiences and insights as a developer, 
    exploring everything from new programming languages to complex algorithms. 
    Dive in to discover my journey in tech and get inspired to innovate. 
    Happy reading!`,
    img: "articles.svg",
    link: "https://www.linkedin.com/in/alessandro-masiero",
    large: true,
    alt: ""
  },
  {
    id:3,
    title: "Showcase",
    callToAction: "Take a look at my previous Works",
    description: `Welcome to my "Work Showcase"! 
    Here, you'll find a collection of my projects, 
    each reflecting my skills and dedication to creating innovative solutions. 
    Explore the highlights of my work and discover the passion I bring to every challenge.`,
    img: "showcase.svg",
    link: "/showcase",
    large: true,
    alt: ""
  },
  {
    id:4,
    title: "Contributions",
    callToAction: "",
    description: "",
    img: "contributions.svg",
    link: "https://github.com/Ale-1508",
    large: false,
    alt: ""
  },
]

type CardType = {
  id: number
  title: string
  description?: string
  callToAction?: string
  img: string,
  link: string,
  large: boolean,
  alt: string,
}

interface CardProps {
  card: CardType
}

const Card = ({ card }: CardProps ) => {
  const cardClassNames = classNames(
    activePalette.bg.primary["50"],
    "flex cursor-pointer m-2 py-8 px-8 sm:px-16 gap-4",
    "rounded-5xl justify-evenly items-center", 
    "hover:bg-sageGreen-200 text-white",
    "hover:shadow-lg bg-opacity-25 hover:bg-opacity-25",
    "xs:col-span-3",
    {
      'xl:col-span-2 flex-row': card.large,
      'xl:col-span-1 flex-col': !card.large,
    },
  );
  return ( 
    <Link href={card.link} className={cardClassNames}>
        <div className={classNames(
          "flex flex-col gap-4 m-0 justify-start items-start h-full",
          { 'w-full': card.large },
          { 'justify-center': !card.large },
        )}>
          <h1 className={`text-3xl sm:text-4xl font-semibold sm:font-medium ${activePalette.text.primary["500"]}`}>{card.title}</h1>
          {card.large && <p className={`text-lg ${activePalette.text.primary["800"]} font-semibold`}>{card.callToAction}</p>}
          <Balancer className={`text-base font-normal ${activePalette.text.primary["800"]}`}>
            {card.description}
          </Balancer>
        </div>
        {card.img !== "" &&
        <Image
          className={classNames(
            "rounded-3xl mt-2",
            { 'hidden md:hidden ml:inline mt-0': card.large },
          )}
          src={`/images/${card.img}`}
          width={224}
          height={224}
          alt={card.alt}
        />
        } 
    </Link>
  )
}

const ContentCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <ul className={`grid grid-cols-1 sm:grid-cols-3 justify-center gap-8
                   mx-8 sm:mx-16 md:mx-24 lg:mx-32 2xl:mx-64 my-2
                   transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
      { cards.map(
        (card) => <Card key={card.id} card={card}/>
      )}
    </ul>
  )
}

export default ContentCards;