import HomeScreen from "./home/HomeScreen";
import Layout from "./_core/components/Layout";

export default function Home() {
  return (
    <Layout currentPath="Work">
      <HomeScreen />
    </Layout>
  );
}