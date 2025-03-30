import Layout from "@/components/Layout";
import ContentCards from "./components/ContentCards";
import WhoAmI from "./components/WhoAmI";
import WorkInProgress from "./components/WorkInProgress";


function HomeScreen() {
  return(
    <Layout className={`
      gap-12 mb-16
      flex justify-center
    `}>
      <WhoAmI />
      <ContentCards />
      <WorkInProgress />
    </Layout>
  );
}

export default HomeScreen;