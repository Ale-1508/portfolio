import ContentCards from "./components/ContentCards";
import WhoAmI from "./components/WhoAmI";
import WorkInProgress from "./components/WorkInProgress";


function HomeScreen() {
  return(
    <>
      <WhoAmI />
      <ContentCards />
      <WorkInProgress />
    </>
  );
}

export default HomeScreen;