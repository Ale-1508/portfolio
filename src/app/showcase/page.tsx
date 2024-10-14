"use client";

import { usePathname } from 'next/navigation'

import Layout from "../_core/components/Layout";

export default function ShowcaseScreen() {
  const pathname = usePathname()
  console.log(pathname);

  return (
    <Layout>
      <div>
        <h1>Showcase Page</h1>
      </div>
    </Layout>
  );
}
