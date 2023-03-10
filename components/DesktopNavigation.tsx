import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HomeIcon from "../svg/HomeIcon";
import TvSeriesIcon from "../svg/TvSeriesIcon";
import MoviesIcon from "../svg/MoviesIcon";
import BookmarkIcon from "../svg/BookmarkIcon";
import Link from "next/link";
import { useRouter } from "next/router";

function DesktopNavigation() {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <Container>
      <Content>
        <NavBlock>
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
        </NavBlock>
        <AvatarImage
          width={40}
          height={40}
          src="/assets/image-avatar.png"
          alt="avatar logo"
        />
      </Content>
    </Container>
  );
}

export default DesktopNavigation;

const Container = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
    width: 96px;
    height: 960px;
    margin-right: 36px;
    margin-top: 32px;
  }
`;

const Content = styled.div`
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 100%;
    background: #161d2f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 36px 32px 32px 32px;
    margin-left: 36px;
  }
`;

const NavBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 75px;
`;

const LogoImage = styled(Image)`
  @media screen and (min-width: 1024px) {
    width: 32px;
    height: 25px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;
`;

const AvatarImage = styled(Image)`
  @media screen and (min-width: 1024px) {
    border-radius: 50%;
    border: 1px solid white;
    width: 40px;
    height: 40px;
  }
`;
