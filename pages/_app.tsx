import styled from "styled-components";
import GlobalStyles from "@/styles/GlobalStyles";
import DesktopNavigation from "@/components/DesktopNavigation";
import Navigation from "@/components/Navigation";
import { Outfit } from "@next/font/google";
import type { AppProps } from "next/app";

export const outfit = Outfit({
  weight: ["300", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <GlobalStyles font={outfit.style.fontFamily} />
      <Navigation />
      <Container>
        <DesktopNavigation />
        <Component {...pageProps} />
      </Container>
    </main>
  );
}

const Container = styled.div`
  padding: 0 16px;

  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    padding: 0;
  }
`;
