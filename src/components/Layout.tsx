import { ReactNode } from "react";
import { Inter } from "@next/font/google";

type Layout = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Layout) {
  return (
    <main className={`${inter.className} layout`}>{children}</main>
  );
}
