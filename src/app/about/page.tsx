import AboutMe from "./components/AboutMe";
import TimeLine from "./components/TimeLine";
import WorkPrinciples from "./components/WorkPrinciples";
import MoreAboutMe from "./components/MoreAboutMe";
import PictureGallery from "./components/PictureGallery";

export default function AboutScreen() {
  return (
    <div>
      <AboutMe />
      <TimeLine />
      <WorkPrinciples />
      <MoreAboutMe />
      <PictureGallery />
    </div>
  );
}