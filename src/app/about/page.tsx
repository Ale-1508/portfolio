"use client";

import { usePathname } from 'next/navigation'

import Layout from "../_core/components/Layout";

export default function AboutScreen() {
  const pathname = usePathname()
  console.log(pathname);
  return (
    <Layout>
      <div>
        <h1>About Page</h1>
      </div>
    </Layout>
  );
}
