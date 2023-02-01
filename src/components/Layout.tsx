import { ReactNode } from "react";
import { Inter } from "@next/font/google";
import styles from "@/styles/Layout.module.css";

type Layout = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Layout) {
  return (
    <main className={`${inter.className} ${styles.container}`}>{children}</main>
  );
}
