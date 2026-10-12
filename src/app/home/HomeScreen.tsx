import ContentCards from "./components/ContentCards";
import WhoAmI from "./components/WhoAmI";
import WorkInProgress from "./components/WorkInProgress";


function HomeScreen() {
  return(
    <div>
      <WhoAmI />
      <ContentCards />
      <WorkInProgress />
    </div>
  );
}

export default HomeScreen;