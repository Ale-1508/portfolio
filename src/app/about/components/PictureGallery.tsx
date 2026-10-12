"use client";

import Image from 'next/image';
import { activePalette } from "@/logic/_core/common/colors";
import { motion } from 'motion/react';
import { cn } from 'cn';

interface Picture {
  src: string
  alt: string
  width?: number
  height?: number
}

type TimeOfDay = 'morning' | 'afternoon' | 'night';

const picturesRoot = "/images/gallery"
const pictures: Record<TimeOfDay, Picture[]> = {
  morning: [
    {
      src: "mountain-day.jpg",
      alt: "Morning in the Alps",
      width: 448,
      height: 448
    },
    {
      src: "venice.jpg",
      alt: "Morning in Venice",
      width: 320,
      height: 320
    }
  ],
  afternoon: [
    {
      src: "nature.jpg",
      alt: "Sorgenti del Sile",
      width: 384,
      height: 384
    },
    {
      src: "como lake.jpg",
      alt: "Lake of Como",
      width: 320,
      height: 320
    }
  ],
  night: [
    {
      src: "sunset.jpg",
      alt: "Sunset in Venice",
      width: 320,
      height: 320
    },
    {
      src: "mountain-night.jpg",
      alt: "Sunset in the Alps",
      width: 320,
      height: 320
    }
  ],
}

const PictureGallery = () => {
  const getTimeOfTheDay = (): TimeOfDay => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "afternoon";
    } else {
      return "night";
    }
  }
  const timeOfTheDay = getTimeOfTheDay();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "flex flex-col md:flex-row",
        "gap-8 md:gap-16",
        "justify-center items-center",
      )}>
      {pictures[timeOfTheDay].map((picture, index) => (
        <div key={index} className="flex flex-col items-center group">
          <Image
            key={index}
            className="rounded-2xl shadow-2xl"
            src={`${picturesRoot}/${picture.src}`}
            width={picture.width !== undefined ? picture.width : 256}
            height={picture.height !== undefined ? picture.height : 256}
            alt={picture.alt}
          />
          <span className={`
          opacity-0 group-hover:opacity-100  
          transition-transform duration-500 ease-out 
          text-center
          rounded-2xl mt-2 p-2
          ${activePalette.bg.primary["200"]} bg-opacity-25  
          ${activePalette.text.primary["700"]}
        `}>{picture.alt}</span>
        </div>

      ))}
    </motion.div>
  )
}

export default PictureGallery