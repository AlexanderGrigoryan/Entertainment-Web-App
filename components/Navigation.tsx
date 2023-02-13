import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import HomeIcon from "@/assets/svg/HomeIcon";
import TvSeriesIcon from "@/assets/svg/TvSeriesIcon";
import MoviesIcon from "@/assets/svg/MoviesIcon";
import BookmarkIcon from "@/assets/svg/BookmarkIcon";
import AvatarIcon from "@/assets/images/image-avatar.png";
import Link from "next/link";

function Navigation() {
  return (
    <Container>
      <Content>
        <LogoImage src={Logo} alt="logo" />
        <Nav>
          <Link href="/">
            <HomeIcon />
          </Link>
          <Link href="/movies">
            <MoviesIcon />
          </Link>
          <Link href="/tv-series">
            <TvSeriesIcon />
          </Link>
          <Link href="/bookmarked">
            <BookmarkIcon />
          </Link>
        </Nav>
        <AvatarImage src={AvatarIcon} alt="avatar logo" />
      </Content>
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 24px;
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

const Button = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
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
