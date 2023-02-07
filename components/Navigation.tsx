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
      <Image src={Logo} alt="logo" width={25} height={20} />
      <Nav>
        <Link href="/home">
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
    </Container>
  );
}

export default Navigation;

const Container = styled.div`
  width: 100%;
  height: 56px;
  background: #161d2f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
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
`;
