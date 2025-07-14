import Image from "next/image";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles/globalstyled";
import Footer from "./Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
}
