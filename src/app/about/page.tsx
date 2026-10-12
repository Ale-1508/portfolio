import AboutMe from "./components/AboutMe";
import TimeLine from "./components/TimeLine";
import WorkPrinciples from "./components/WorkPrinciples";
import MoreAboutMe from "./components/MoreAboutMe";
import PictureGallery from "./components/PictureGallery";

export default function AboutScreen() {
  return (
    <div className="flex flex-col gap-16">
      <AboutMe />
      <TimeLine />
      <WorkPrinciples />
      <MoreAboutMe />
      <PictureGallery />
    </div>
  );
}