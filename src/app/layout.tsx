import { FC } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { Props } from "./types";
import { Providers } from "@/providers";

const inter = Inter({ subsets: ["latin"] });

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        <title>App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body className={inter.className}>
        <Providers>
          <div className="container mx-auto px-4 py-12">{children}</div>
        </Providers>
      </body>
    </html>
  );
};
export default RootLayout;
