import ContentCard from "./components/ContentCards";
import WhoAmI from "./components/WhoAmI";
import WorkInProgress from "./components/WorkInProgress";


function HomeScreen() {
  return(
    <>
      <WhoAmI />
      <ContentCard />
      <WorkInProgress />
    </>
  );
}

export default HomeScreen;