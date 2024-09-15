import Image from "next/image";
import { Barlow_Semi_Condensed } from "next/font/google";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globalstyled";
import Footer from "./Footer/Footer";

const barlow = Barlow_Semi_Condensed({
  weight: ["200", "400", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main className={barlow.className}>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
