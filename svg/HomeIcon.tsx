import React from "react";
import styled, { css } from "styled-components";

interface PropsHomeIcon {
  pathname: string;
}

function HomeIcon(props: PropsHomeIcon) {
  const { pathname } = props;

  return (
    <Svg
      pathname={pathname}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
        fill="#5A698F"
      />
    </Svg>
  );
}

export default HomeIcon;

const Svg = styled.svg(
  (props: { pathname: string }) => css`
    path {
      fill: ${props.pathname === "/" ? "#FFFFFF" : "#5A698F"};
    }
    &:hover path {
      fill: #fc4747;
    }
  `
);
