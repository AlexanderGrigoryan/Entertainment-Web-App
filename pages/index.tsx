import Trending from "@/components/Trending";
import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>Entertainment Web App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <MainContainer>
        <Trending />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.main``;
