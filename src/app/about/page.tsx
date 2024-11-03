"use client"

import { useEffect, useState } from "react"
import Layout from "../_core/components/Layout";
import classNames from 'classnames';
import Image from 'next/image'
import Balancer from "react-wrap-balancer";

import AboutMe from "./components/AboutMe";
import TimeLine from "./components/TimeLine";
import WorkPrinciples from "./components/WorkPrinciples";
import MoreAboutMe from "./components/MoreAboutMe";
import PictureGallery from "./components/PictureGallery";

// transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`

export default function AboutScreen() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])
  
  return (
    <Layout currentPath="About">
      <AboutMe />
      <TimeLine />
      <WorkPrinciples />
      <MoreAboutMe />
      <PictureGallery />
    </Layout>
  );
}
