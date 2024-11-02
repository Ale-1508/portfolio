"use client"

import { useEffect, useState } from "react"
import classNames from 'classnames';
import Image from 'next/image'

const cards = [
  {
    id:1,
    title: "About Me",
    description: "",
    img: "about-me.svg",
    link: "",
    large: false,
    alt: "Picture of Me"
  },
  {
    id:2,
    title: "Articles",
    description: "Read my articles!",
    img: "articles.svg",
    link: "",
    large: true,
    alt: ""
  },
  {
    id:3,
    title: "Showcase",
    description: "Take a look at my previous works",
    img: "showcase.svg",
    link: "",
    large: true,
    alt: ""
  },
  {
    id:4,
    title: "Contributions",
    description: "",
    img: "contributions.svg",
    link: "",
    large: false,
    alt: ""
  },
]

type CardType = {
  id: number
  title: string
  description?: string
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
    "flex cursor-pointer h-80 m-2 py-8 px-16 gap-4",
    "rounded-5xl justify-evenly items-center", 
    "bg-sageGreen-400 hover:bg-sageGreen-500 text-white",
    "hover:shadow-2xl",
    "text-4xl font-medium",
    "xs:col-span-3",
    {
      'xl:col-span-2 flex-row': card.large,
      'xl:col-span-1 flex-col': !card.large,
    },
  );
  return (
    <li className={cardClassNames}>
      <div className={classNames(
        "flex flex-col gap-4 m-0 justify-start items-start h-full",
        { 'w-full': card.large },
        { 'justify-center': !card.large },
      )}>
        <h1 className="text-primary-600">{card.title}</h1>
        {card.large && <p className="text-lg font-light text-primary-800">{card.description}</p>
        }
      </div>
      {card.img !== "" &&
      <Image
        className="rounded-3xl"
        src={`/images/${card.img}`}
        width={224}
        height={224}
        alt={card.alt}
      />
      } 
    </li>
  )
}

const ContentCards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <ul className={`grid grid-cols-3 justify-center gap-8
                   xs:mx-8 sm:mx-16 md:mx-24 lg:mx-32 2xl:mx-64 my-2
                   transition-transform duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
      { cards.map(
        (card) => <Card key={card.id} card={card}/>
      )}
    </ul>
  )
}

export default ContentCards;