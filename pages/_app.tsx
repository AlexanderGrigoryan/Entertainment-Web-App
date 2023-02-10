import Navigation from "@/components/Navigation";
import Search from "@/components/Search";
import GlobalStyles from "@/styles/GlobalStyles";
import { Outfit } from "@next/font/google";
import type { AppProps } from "next/app";
import styled from "styled-components";

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
        <Search />
        <Component {...pageProps} />
      </Container>
    </main>
  );
}

const Container = styled.div`
  padding: 0 16px;
`;
