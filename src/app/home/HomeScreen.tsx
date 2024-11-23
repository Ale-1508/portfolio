import Layout from "@/components/Layout";
import ContentCards from "./components/ContentCards";
import WhoAmI from "./components/WhoAmI";
import WorkInProgress from "./components/WorkInProgress";


function HomeScreen() {
  return(
    <Layout currentPath="Work" className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-12 mb-16">
      <WhoAmI />
      <ContentCards />
      <WorkInProgress />
    </Layout>
  );
}

export default HomeScreen;