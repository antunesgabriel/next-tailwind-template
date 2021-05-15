import Link from "next/link";

import Layout from "@app/components/layout.component";

const IndexPage = () => (
  <Layout title="Home">
    <div className="h-full flex justify-center items-center">
      <h1 className="text-brand-main font-bold text-2xl">Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default IndexPage;
