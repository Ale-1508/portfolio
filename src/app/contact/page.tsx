import Layout from "../_core/components/Layout";
import ContactMeForm from "./components/ContactMeForm";

export default function ContactScreen() {
  return (
    <Layout currentPath="Contact" className="mx-2 sm:mx-24 gap-4 mb-16">
      <ContactMeForm />
    </Layout>
  );
}
