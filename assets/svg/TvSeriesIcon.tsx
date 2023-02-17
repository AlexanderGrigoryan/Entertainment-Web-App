import React from "react";
import styled, { css } from "styled-components";

interface PropsTvSeriesIcon {
  pathname: string;
}

function TvSeriesIcon(props: PropsTvSeriesIcon) {
  const { pathname } = props;

  return (
    <Svg
      pathname={pathname}
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
        fill="#5A698F"
      />
    </Svg>
  );
}

export default TvSeriesIcon;

const Svg = styled.svg(
  (props: { pathname: string }) => css`
    path {
      fill: ${props.pathname === "/tv-series" ? "#FFFFFF" : "#5A698F"};
    }
    &:hover path {
      fill: #fc4747;
    }
  `
);
