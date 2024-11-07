import HomeScreen from "./home/HomeScreen";
import Layout from "./_core/components/Layout";

export default function Home() {
  return (
    <Layout currentPath="Work" className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-12 mb-16">
      <HomeScreen />
    </Layout>
  );
}