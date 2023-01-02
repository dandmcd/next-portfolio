import Image from "next/image";
import { Barlow_Semi_Condensed } from "@next/font/google";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globalstyled";
import Footer from "./Footer/Footer";

const barlow = Barlow_Semi_Condensed({
  weight: ["200", "400", "600", "700", "800"],
  subsets: ["latin"],
});

const BgImage = styled(Image)`
  z-index: -1;
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BgImage src="/wavepattern6.svg" alt="Background" fill priority />
        <main className={barlow.className}>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
