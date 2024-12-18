import Layout from "../_core/components/Layout";

import AboutMe from "./components/AboutMe";
import TimeLine from "./components/TimeLine";
import WorkPrinciples from "./components/WorkPrinciples";
import MoreAboutMe from "./components/MoreAboutMe";
import PictureGallery from "./components/PictureGallery";

export default function AboutScreen() {
  return (
    <Layout currentPath="About" className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-24 mb-16">
      <AboutMe />
      <TimeLine />
      <WorkPrinciples />
      <MoreAboutMe />
      <PictureGallery />
    </Layout>
  );
}