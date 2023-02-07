import Navigation from "@/components/Navigation";
import GlobalStyles from "@/styles/GlobalStyles";
import { Outfit } from "@next/font/google";
import type { AppProps } from "next/app";

const outfit = Outfit({
  weight: ["300", "500"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={outfit.className}>
      <GlobalStyles />
      <Navigation />
      <Component {...pageProps} />
    </main>
  );
}
