import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HomeIcon from "../svg/HomeIcon";
import TvSeriesIcon from "../svg/TvSeriesIcon";
import MoviesIcon from "../svg/MoviesIcon";
import BookmarkIcon from "../svg/BookmarkIcon";
import Link from "next/link";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Container>
      <Content>
        <LogoImage width={25} height={20} src="/assets/logo.svg" alt="logo" />
        <Nav>
          <Link href="/">
            <HomeIcon pathname={pathname} />
          </Link>
          <Link href="/movies">
            <MoviesIcon pathname={pathname} />
          </Link>
          <Link href="/tv-series">
            <TvSeriesIcon pathname={pathname} />
          </Link>
          <Link href="/bookmarked">
            <BookmarkIcon pathname={pathname} />
          </Link>
        </Nav>
        <AvatarImage
          width={24}
          height={24}
          src="/assets/image-avatar.png"
          alt="avatar logo"
        />
      </Content>
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 24px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 56px;
  background: #161d2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;

  @media screen and (min-width: 768px) {
    padding: 24px;
    margin-top: 24px;
  }
`;

const LogoImage = styled(Image)`
  width: 25px;
  height: 20px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 25px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

const AvatarImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid white;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;
