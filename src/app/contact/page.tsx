import Layout from "../_core/components/Layout";
import ContactMeForm from "./components/ContactMeForm";

export default function ContactScreen() {
  return (
    <Layout currentPath="Contact" className="mx-8 sm:mx-16 md:mx-24 lg:mx-32 gap-4 mb-16">
      <ContactMeForm />
    </Layout>
  );
}
