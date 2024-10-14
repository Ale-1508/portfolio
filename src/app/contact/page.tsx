"use client";

import { usePathname } from 'next/navigation'

import Layout from "../_core/components/Layout";

export default function ContactScreen() {
  const pathname = usePathname()
  console.log(pathname);

  return (
    <Layout>
      <div>
        <h1>Contact Page</h1>
      </div>
    </Layout>
  );
}
