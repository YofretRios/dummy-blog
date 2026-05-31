import { ReactNode } from "react";
import { Montserrat } from "@next/font/google";

type Layout = {
  children: ReactNode;
};

// Montserrat font from Google Fonts
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Layout({ children }: Layout) {
  return (
    <main className={`${montserrat.className} layout`}>
      {children}
      <footer className="footer">
        Yofret Rios © {new Date().getFullYear()}
      </footer>
    </main>
  );
}
