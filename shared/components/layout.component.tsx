import React, { ReactNode } from "react";

import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "Gabriel Antunes - Front-end Enginner",
}: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main className="h-full">{children}</main>
  </>
);

export default Layout;
