"use client";

import Layout from "../_core/components/Layout";

import classNames from "classnames";
import { useEffect, useState } from "react"
import { Header } from "./components/header";

export default function ShowcaseScreen() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect( () => {
    setIsVisible(true);
  }, [])

  return (
    <Layout currentPath="Showcase">
      <div className={`
        flex flex-col gap-8 justify-center items-center
        transition-transform duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
        `}>
        <Header title="Project Showcase" isVisible={isVisible}></Header>
      </div>
    </Layout>
  );
}
